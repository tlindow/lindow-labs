import { NextRequest, NextResponse } from "next/server";
import { isAuthorizedRequest, isCmsConfigured } from "@/lib/cms-auth";
import { getSiteContent, getStorageProvider, saveSiteContent } from "@/lib/site-content";

export const runtime = "nodejs";

function unauthorizedResponse() {
  return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
}

export async function GET(request: NextRequest) {
  if (!isCmsConfigured()) {
    return NextResponse.json(
      { error: "CMS is not configured. Add CMS_PASSWORD to your environment." },
      { status: 503 }
    );
  }

  if (!isAuthorizedRequest(request)) {
    return unauthorizedResponse();
  }

  const content = await getSiteContent();
  return NextResponse.json({
    content,
    storage: getStorageProvider(),
  });
}

export async function PUT(request: NextRequest) {
  if (!isCmsConfigured()) {
    return NextResponse.json(
      { error: "CMS is not configured. Add CMS_PASSWORD to your environment." },
      { status: 503 }
    );
  }

  if (!isAuthorizedRequest(request)) {
    return unauthorizedResponse();
  }

  const payload = await request.json().catch(() => null);
  if (!payload) {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const content = await saveSiteContent(payload);
  return NextResponse.json({ ok: true, content });
}
