import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const runDirectoryArg = process.argv[2] ?? "runs/improved";
const runDirectory = path.resolve(projectRoot, runDirectoryArg);
const scenariosPath = path.join(projectRoot, "fixtures", "scenarios.json");

if (!fs.existsSync(scenariosPath)) {
  console.error(`Missing scenarios file: ${scenariosPath}`);
  process.exit(1);
}

if (!fs.existsSync(runDirectory)) {
  console.error(`Run directory not found: ${runDirectory}`);
  process.exit(1);
}

const scenarios = JSON.parse(fs.readFileSync(scenariosPath, "utf8"));
const results = [];

for (const scenario of scenarios) {
  const runPath = path.join(runDirectory, `${scenario.id}.json`);
  const checks = [];

  if (!fs.existsSync(runPath)) {
    checks.push({
      name: "run file exists",
      pass: false,
      detail: `Missing ${path.relative(projectRoot, runPath)}`,
    });

    results.push({
      scenario,
      checks,
      passed: 0,
      total: checks.length,
    });
    continue;
  }

  let run;
  try {
    run = JSON.parse(fs.readFileSync(runPath, "utf8"));
  } catch (error) {
    checks.push({
      name: "valid json",
      pass: false,
      detail: error instanceof Error ? error.message : "Unknown parse error",
    });

    results.push({
      scenario,
      checks,
      passed: 0,
      total: checks.length,
    });
    continue;
  }

  const customerReply = normalizeText(run.customer_reply);
  const bugReportText = normalizeText(
    run.bug_report
      ? `${run.bug_report.title ?? ""} ${run.bug_report.body ?? ""}`
      : "",
  );
  const evidence = Array.isArray(run.evidence) ? run.evidence : [];
  const evidenceSources = new Set(
    evidence
      .map((entry) => (entry && typeof entry.source === "string" ? entry.source : ""))
      .filter(Boolean),
  );
  const followUpQuestions = Array.isArray(run.follow_up_questions)
    ? run.follow_up_questions
    : [];

  addCheck(checks, "ticket_id matches fixture", run.ticket_id === scenario.id, `saw ${run.ticket_id}`);
  addCheck(
    checks,
    "summary is present",
    typeof run.summary === "string" && run.summary.trim().length >= 24,
    `length ${typeof run.summary === "string" ? run.summary.trim().length : 0}`,
  );
  addCheck(
    checks,
    "failure point matches expected",
    run.failure_point === scenario.expected.failure_point,
    `expected ${scenario.expected.failure_point}, saw ${run.failure_point}`,
  );
  addCheck(
    checks,
    "disposition matches expected",
    run.disposition === scenario.expected.disposition,
    `expected ${scenario.expected.disposition}, saw ${run.disposition}`,
  );
  addCheck(
    checks,
    "confidence is a number from 0 to 1",
    typeof run.confidence === "number" && run.confidence >= 0 && run.confidence <= 1,
    `saw ${run.confidence}`,
  );
  addCheck(
    checks,
    "evidence count meets minimum",
    evidence.length >= scenario.expected.min_evidence,
    `expected at least ${scenario.expected.min_evidence}, saw ${evidence.length}`,
  );
  addCheck(
    checks,
    "required evidence sources are present",
    scenario.expected.required_evidence_sources.every((source) => evidenceSources.has(source)),
    `required ${scenario.expected.required_evidence_sources.join(", ")}, saw ${[...evidenceSources].join(", ") || "none"}`,
  );
  addCheck(
    checks,
    "customer reply includes required keywords",
    scenario.expected.required_customer_reply_keywords.every((keyword) =>
      customerReply.includes(keyword.toLowerCase()),
    ),
    `expected keywords ${scenario.expected.required_customer_reply_keywords.join(", ")}`,
  );
  addCheck(
    checks,
    "customer reply excludes internal-only language",
    scenario.expected.forbidden_customer_reply_keywords.every(
      (keyword) => !customerReply.includes(keyword.toLowerCase()),
    ),
    `forbidden keywords ${scenario.expected.forbidden_customer_reply_keywords.join(", ")}`,
  );

  if (scenario.expected.requires_follow_up_questions) {
    addCheck(
      checks,
      "follow-up questions are present",
      followUpQuestions.length > 0 && followUpQuestions.every((question) => typeof question === "string" && question.trim().endsWith("?")),
      `saw ${followUpQuestions.length} follow-up question(s)`,
    );
  } else {
    addCheck(
      checks,
      "follow-up questions are empty",
      followUpQuestions.length === 0,
      `saw ${followUpQuestions.length} follow-up question(s)`,
    );
  }

  if (scenario.expected.requires_bug_report) {
    addCheck(
      checks,
      "bug report is present",
      !!run.bug_report && typeof run.bug_report === "object",
      "bug report should be a populated object",
    );
    addCheck(
      checks,
      "bug report includes required keywords",
      scenario.expected.required_bug_report_keywords.every((keyword) =>
        bugReportText.includes(keyword.toLowerCase()),
      ),
      `expected keywords ${scenario.expected.required_bug_report_keywords.join(", ")}`,
    );
  } else {
    addCheck(
      checks,
      "bug report is omitted",
      run.bug_report === null || run.bug_report === undefined,
      "bug report should be null or absent",
    );
  }

  const passed = checks.filter((check) => check.pass).length;
  results.push({
    scenario,
    checks,
    passed,
    total: checks.length,
  });
}

let totalPassed = 0;
let totalChecks = 0;

console.log(`Evaluating runs in ${path.relative(projectRoot, runDirectory)}`);
console.log("");

for (const result of results) {
  totalPassed += result.passed;
  totalChecks += result.total;

  const icon = result.passed === result.total ? "PASS" : "FAIL";
  console.log(`${icon} ${result.scenario.id} (${result.passed}/${result.total})`);

  for (const check of result.checks) {
    const marker = check.pass ? "  [x]" : "  [ ]";
    console.log(`${marker} ${check.name} — ${check.detail}`);
  }

  console.log("");
}

const percent = totalChecks === 0 ? 0 : Math.round((totalPassed / totalChecks) * 100);
console.log(`Overall score: ${totalPassed}/${totalChecks} checks passed (${percent}%)`);

if (totalPassed !== totalChecks) {
  process.exitCode = 1;
}

function addCheck(checks, name, pass, detail) {
  checks.push({ name, pass, detail });
}

function normalizeText(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.toLowerCase().replace(/\s+/g, " ").trim();
}
