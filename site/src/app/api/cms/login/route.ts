import { NextResponse } from "next/server";
import {
  CMS_AUTH_COOKIE,
  CMS_AUTH_COOKIE_OPTIONS,
  getCmsAuthToken,
  isCmsConfigured,
  isPasswordValid,
} from "@/lib/cms-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isCmsConfigured()) {
    return NextResponse.json(
      { error: "CMS is not configured. Add CMS_PASSWORD to your environment." },
      { status: 503 }
    );
  }

  const body = (await request.json().catch(() => ({}))) as { password?: unknown };

  if (typeof body.password !== "string" || !isPasswordValid(body.password)) {
    return NextResponse.json({ error: "Invalid password." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(CMS_AUTH_COOKIE, getCmsAuthToken(), CMS_AUTH_COOKIE_OPTIONS);
  return response;
}
