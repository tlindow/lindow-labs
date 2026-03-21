import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminEditor from "./AdminEditor";
import heroContent from "@/content/hero.json";
import aboutContent from "@/content/about.json";
import mentoringContent from "@/content/mentoring.json";
import portfolioContent from "@/content/portfolio.json";
import speakingContent from "@/content/speaking.json";
import contentSection from "@/content/content-section.json";
import metaContent from "@/content/meta.json";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("cms_auth");

  if (auth?.value !== "1") {
    redirect("/admin/login");
  }

  return (
    <AdminEditor
      initialContent={{
        hero: heroContent,
        about: aboutContent,
        mentoring: mentoringContent,
        portfolio: portfolioContent,
        speaking: speakingContent,
        "content-section": contentSection,
        meta: metaContent,
      }}
    />
  );
}
