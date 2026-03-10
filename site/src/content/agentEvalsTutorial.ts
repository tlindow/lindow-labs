export const tutorialWorkflowCards = [
  {
    title: "1. Gather context",
    description:
      "Treat support as a research problem. Pull together the ticket, logs, account context, known issues, and the runbook before you decide anything.",
  },
  {
    title: "2. Locate the failure",
    description:
      "Classify the failure point cleanly: client, auth, API, dependency, or unknown if you still need more evidence.",
  },
  {
    title: "3. Decide the disposition",
    description:
      "Figure out whether the report matches a known issue, expected behavior, a real bug, or a needs-more-info response.",
  },
  {
    title: "4. Close the loop",
    description:
      "Draft a customer-safe reply, escalate only when it is warranted, and turn repeated cases into evals, docs updates, or better prompts.",
  },
];

export const tutorialProjectFiles = [
  {
    path: "fixtures/scenarios.json",
    description: "Four support tickets plus the expected outcomes you want the agent to hit.",
  },
  {
    path: "prompts/support-investigator.md",
    description: "A reusable instruction template for Cursor, Claude Code, or a similar development agent.",
  },
  {
    path: "runs/baseline/",
    description: "Intentionally rough investigation artifacts that fail multiple deterministic checks.",
  },
  {
    path: "runs/improved/",
    description: "Cleaner artifacts that pass the same benchmark and demonstrate the target behavior.",
  },
  {
    path: "scripts/eval-runs.mjs",
    description: "A tiny Node-based eval harness that scores the runs and makes regressions obvious.",
  },
];

export const tutorialQuickStart = `cd examples/agent-evals-hello-world
npm run eval:baseline
npm run eval:improved`;

export const tutorialAgentPrompt = `Read examples/agent-evals-hello-world/fixtures/scenarios.json and
examples/agent-evals-hello-world/prompts/support-investigator.md.

Generate a support investigation artifact for the scenario with id
"repo-index-timeout". Save it as
examples/agent-evals-hello-world/runs/manual/repo-index-timeout.json.

Follow the required JSON shape exactly. Be explicit about the failure point,
include evidence entries, keep the customer reply safe for external use, and
only include bug_report if the disposition is "bug".`;

export const tutorialScoreManualRun = `mkdir -p runs/manual
npm run eval -- runs/manual`;

export const inlineTutorialSteps = [
  {
    number: "01",
    title: "Watch the benchmark fail and pass",
    description:
      "Run the baseline and improved examples first. That gives you a feel for what the harness actually checks and what a meaningful improvement looks like.",
    code: tutorialQuickStart,
  },
  {
    number: "02",
    title: "Ask your coding agent for one structured run",
    description:
      "Use Cursor, Claude Code, or a similar tool to generate a support investigation artifact instead of a loose chat answer.",
    code: tutorialAgentPrompt,
  },
  {
    number: "03",
    title: "Score it and tighten the prompt",
    description:
      "Rerun the harness, inspect the failing checks, and improve the prompt or schema until the same benchmark passes consistently.",
    code: tutorialScoreManualRun,
  },
];
