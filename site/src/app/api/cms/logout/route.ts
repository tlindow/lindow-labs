import { NextResponse } from "next/server";
import { CMS_AUTH_COOKIE, CMS_AUTH_COOKIE_OPTIONS } from "@/lib/cms-auth";

export const runtime = "nodejs";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(CMS_AUTH_COOKIE, "", {
    ...CMS_AUTH_COOKIE_OPTIONS,
    maxAge: 0,
  });
  return response;
}
