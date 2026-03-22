import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

const VALID_SECTIONS = [
  "hero",
  "about",
  "mentoring",
  "portfolio",
  "speaking",
  "content-section",
  "meta",
] as const;

type Section = (typeof VALID_SECTIONS)[number];

function isValidSection(s: string): s is Section {
  return (VALID_SECTIONS as readonly string[]).includes(s);
}

function getBranch(): string {
  return (
    process.env.VERCEL_GIT_COMMIT_REF ??
    process.env.GITHUB_BRANCH ??
    "master"
  );
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;

  if (!token || !owner || !repo) {
    return NextResponse.json(
      { error: "GitHub env vars not configured (GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO)" },
      { status: 500 }
    );
  }

  const body = await req.json();
  const { section, content } = body as { section: string; content: unknown };

  if (!isValidSection(section)) {
    return NextResponse.json({ error: "Invalid section" }, { status: 400 });
  }

  const branch = getBranch();
  const filePath = `site/src/content/${section}.json`;
  const apiBase = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

  // Get current file SHA
  const getRes = await fetch(`${apiBase}?ref=${branch}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!getRes.ok && getRes.status !== 404) {
    const err = await getRes.text();
    return NextResponse.json({ error: `GitHub GET failed: ${err}` }, { status: 502 });
  }

  let sha: string | undefined;
  if (getRes.ok) {
    const fileData = await getRes.json();
    sha = fileData.sha as string;
  }

  const newContent = JSON.stringify(content, null, 2) + "\n";
  const encoded = Buffer.from(newContent).toString("base64");

  const putRes = await fetch(apiBase, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: `cms: update ${section} content`,
      content: encoded,
      branch,
      ...(sha ? { sha } : {}),
    }),
  });

  if (!putRes.ok) {
    const err = await putRes.text();
    return NextResponse.json({ error: `GitHub PUT failed: ${err}` }, { status: 502 });
  }

  return NextResponse.json({ ok: true, branch });
}
