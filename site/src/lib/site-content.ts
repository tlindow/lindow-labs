import { Redis } from "@upstash/redis";
import { promises as fs } from "node:fs";
import path from "node:path";
import {
  defaultSiteContent,
  normalizeSiteContent,
  type SiteContent,
} from "@/lib/site-content-schema";

const LOCAL_CONTENT_PATH = path.join(process.cwd(), "content", "site-content.json");
const CONTENT_KEY = "site:content:v1";

function createRedisClient(): Redis | null {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }

  return Redis.fromEnv();
}

const redis = createRedisClient();

async function readLocalContent(): Promise<SiteContent> {
  try {
    const raw = await fs.readFile(LOCAL_CONTENT_PATH, "utf8");
    return normalizeSiteContent(JSON.parse(raw));
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code !== "ENOENT") {
      console.error("Failed to read local CMS content, using defaults.", err);
    }

    await saveLocalContent(defaultSiteContent);
    return normalizeSiteContent(defaultSiteContent);
  }
}

async function saveLocalContent(content: SiteContent): Promise<void> {
  await fs.mkdir(path.dirname(LOCAL_CONTENT_PATH), { recursive: true });
  await fs.writeFile(
    LOCAL_CONTENT_PATH,
    JSON.stringify(content, null, 2),
    "utf8"
  );
}

export function getStorageProvider(): "upstash" | "filesystem" {
  return redis ? "upstash" : "filesystem";
}

export async function getSiteContent(): Promise<SiteContent> {
  if (redis) {
    try {
      const stored = await redis.get<SiteContent>(CONTENT_KEY);
      if (!stored) {
        await redis.set(CONTENT_KEY, defaultSiteContent);
        return normalizeSiteContent(defaultSiteContent);
      }
      return normalizeSiteContent(stored);
    } catch (error) {
      console.error("Failed to read CMS content from Upstash, using filesystem.", error);
    }
  }

  return readLocalContent();
}

export async function saveSiteContent(value: unknown): Promise<SiteContent> {
  const content = normalizeSiteContent(value);

  if (redis) {
    try {
      await redis.set(CONTENT_KEY, content);
      return content;
    } catch (error) {
      console.error("Failed to save CMS content to Upstash, using filesystem.", error);
    }
  }

  await saveLocalContent(content);
  return content;
}
