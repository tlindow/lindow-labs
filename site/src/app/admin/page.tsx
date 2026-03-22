import { redirect } from "next/navigation";
import { auth } from "@/auth";
import AdminEditor from "./AdminEditor";
import heroContent from "@/content/hero.json";
import aboutContent from "@/content/about.json";
import mentoringContent from "@/content/mentoring.json";
import portfolioContent from "@/content/portfolio.json";
import speakingContent from "@/content/speaking.json";
import contentSection from "@/content/content-section.json";
import metaContent from "@/content/meta.json";

export default async function AdminPage() {
  const session = await auth();

  if (!session) {
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
