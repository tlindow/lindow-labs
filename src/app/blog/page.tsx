import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Blog",
  description: `Articles and posts from ${siteConfig.name} on IT leadership, community impact, and career growth.`,
};

const samplePosts = [
  {
    title: "Why IT Teams Should Donate Retired Equipment",
    excerpt:
      "A guide to setting up an equipment donation program that benefits your community and simplifies asset management.",
    date: "Coming Soon",
    category: "Corporate Responsibility",
    slug: "#",
  },
  {
    title: "Lessons from My First Year as an IT Manager",
    excerpt:
      "The things nobody tells you about transitioning from individual contributor to people manager in IT.",
    date: "Coming Soon",
    category: "Leadership",
    slug: "#",
  },
  {
    title: "Building a Personal Brand on LinkedIn as an IT Professional",
    excerpt:
      "How I started sharing my story on LinkedIn and why I think more IT professionals should do the same.",
    date: "Coming Soon",
    category: "Career Growth",
    slug: "#",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50/20 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
            <BookOpen size={32} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Thoughts, stories, and guides on IT leadership, community impact, and
            everything I&rsquo;m learning along the way. Starting small and
            building from here.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Latest Posts"
            title="Recent Writing"
            description="Blog posts will appear here as they're published. These are planned topics to get started."
          />
          <div className="mt-14 space-y-6">
            {samplePosts.map((post) => (
              <article
                key={post.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-teal-200 hover:shadow-md sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-teal-50 px-3 py-0.5 text-xs font-medium text-teal-700">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.date}</span>
                </div>
                <h2 className="mt-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-teal-700">
                  {post.title}
                </h2>
                <p className="mt-2 leading-relaxed text-slate-500">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>

          {/* Categories */}
          <div className="mt-16">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Categories
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Leadership",
                "Corporate Responsibility",
                "Career Growth",
                "IT Operations",
                "Mentoring",
                "Speaking",
                "Community",
              ].map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-slate-200 px-3.5 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            <strong>Getting started:</strong> These are placeholder post ideas. To
            add real blog posts, create new files in{" "}
            <code className="rounded bg-amber-100 px-1.5 py-0.5 text-xs">
              src/app/blog/[slug]/page.tsx
            </code>{" "}
            or connect a CMS like Contentful, Notion, or MDX files.
          </div>
        </div>
      </section>
    </>
  );
}
