import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const expected = process.env.CMS_PASSWORD;

  if (!expected) {
    return NextResponse.json({ error: "CMS_PASSWORD not configured" }, { status: 500 });
  }

  if (password !== expected) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("cms_auth", "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}
