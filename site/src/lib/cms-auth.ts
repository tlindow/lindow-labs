import { createHash, timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";

export const CMS_AUTH_COOKIE = "tl_cms_auth";

export const CMS_AUTH_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 24 * 30,
};

function getCmsPassword(): string {
  return process.env.CMS_PASSWORD ?? "";
}

export function isCmsConfigured(): boolean {
  return getCmsPassword().length > 0;
}

export function isPasswordValid(password: string): boolean {
  if (!isCmsConfigured()) {
    return false;
  }

  const expected = Buffer.from(getCmsPassword(), "utf8");
  const provided = Buffer.from(password, "utf8");

  if (expected.length !== provided.length) {
    return false;
  }

  return timingSafeEqual(expected, provided);
}

export function getCmsAuthToken(): string {
  return createHash("sha256").update(getCmsPassword()).digest("hex");
}

export function isAuthorizedRequest(request: NextRequest): boolean {
  if (!isCmsConfigured()) {
    return false;
  }

  const token = request.cookies.get(CMS_AUTH_COOKIE)?.value ?? "";
  return token === getCmsAuthToken();
}
