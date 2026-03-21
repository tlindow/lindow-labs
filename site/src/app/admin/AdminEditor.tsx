"use client";

import { useState } from "react";
import { Plus, Trash2, Save, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type HeroContent = {
  tagline: string;
  heading: string;
  bio: string;
  ctaLabel: string;
  ctaHref: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  profileImage: string;
  profileImageAlt: string;
};

type Stat = { label: string; value: string; color: string };
type AboutContent = { paragraphs: string[]; stats: Stat[] };

type Offering = { icon: string; title: string; description: string; color: string; iconColor: string };
type MentoringContent = {
  badge: string;
  heading: string;
  intro: string;
  ctaLabel: string;
  calendlyUrl: string;
  howICanHelp: string;
  offerings: Offering[];
  footerHeading: string;
  footerBody: string;
  footerCtaLabel: string;
  email: string;
};

type Project = { title: string; description: string; tech: string[]; url: string; accent: string; hover: string; glow: string };
type PortfolioContent = { intro: string; githubUrl: string; projects: Project[] };

type Topic = { title: string; description: string; bg: string };
type SpeakingContent = { intro: string; ctaLabel: string; email: string; topics: Topic[] };

type Format = { icon: string; title: string; description: string; iconBg: string; iconColor: string };
type ContentSectionContent = {
  heading: string;
  intro: string;
  followHeading: string;
  followBody: string;
  followCtaLabel: string;
  linkedinUrl: string;
  formats: Format[];
};

type MetaContent = { title: string; description: string; ogTitle: string; ogDescription: string };

type AllContent = {
  hero: HeroContent;
  about: AboutContent;
  mentoring: MentoringContent;
  portfolio: PortfolioContent;
  speaking: SpeakingContent;
  "content-section": ContentSectionContent;
  meta: MetaContent;
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function Field({
  label,
  value,
  onChange,
  multiline = false,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  rows?: number;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-medium text-muted uppercase tracking-wider">{label}</label>
      {multiline ? (
        <textarea
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-violet/40 transition-shadow resize-y"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-violet/40 transition-shadow"
        />
      )}
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6 space-y-4">
      <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest">{title}</h3>
      {children}
    </div>
  );
}

function SaveButton({
  onClick,
  status,
}: {
  onClick: () => void;
  status: "idle" | "saving" | "saved" | "error";
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onClick}
        disabled={status === "saving"}
        className="inline-flex items-center gap-2 rounded-xl bg-violet px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo transition-colors disabled:opacity-50"
      >
        <Save size={14} />
        {status === "saving" ? "Saving…" : "Save & Commit"}
      </button>
      {status === "saved" && (
        <span className="inline-flex items-center gap-1.5 text-sm text-mint">
          <CheckCircle size={14} />
          Committed — Vercel is rebuilding
        </span>
      )}
      {status === "error" && (
        <span className="inline-flex items-center gap-1.5 text-sm text-rose">
          <AlertCircle size={14} />
          Save failed — check console
        </span>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const TABS = ["Hero", "About", "Mentoring", "Portfolio", "Speaking", "Content", "Meta"] as const;
type Tab = (typeof TABS)[number];

export default function AdminEditor({ initialContent }: { initialContent: AllContent }) {
  const [activeTab, setActiveTab] = useState<Tab>("Hero");
  const [content, setContent] = useState<AllContent>(initialContent);
  const [saveStatus, setSaveStatus] = useState<Record<string, "idle" | "saving" | "saved" | "error">>({});

  function setSection<K extends keyof AllContent>(key: K, value: AllContent[K]) {
    setContent((prev) => ({ ...prev, [key]: value }));
  }

  async function save(section: keyof AllContent) {
    setSaveStatus((s) => ({ ...s, [section]: "saving" }));
    try {
      const res = await fetch("/api/cms/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section, content: content[section] }),
      });
      if (!res.ok) {
        const err = await res.json();
        console.error("Save error:", err);
        setSaveStatus((s) => ({ ...s, [section]: "error" }));
      } else {
        setSaveStatus((s) => ({ ...s, [section]: "saved" }));
        setTimeout(() => setSaveStatus((s) => ({ ...s, [section]: "idle" })), 5000);
      }
    } catch (e) {
      console.error(e);
      setSaveStatus((s) => ({ ...s, [section]: "error" }));
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-surface backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <span className="text-violet font-semibold text-sm">✦ CMS</span>
          </div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors"
          >
            View site <ExternalLink size={12} />
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8">
        {/* Tab nav */}
        <nav className="flex flex-wrap gap-1 mb-8 p-1 rounded-2xl bg-surface border border-border w-fit">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-violet text-white"
                  : "text-muted hover:text-foreground hover:bg-surface-alt"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* ── Hero ── */}
        {activeTab === "Hero" && (
          <div className="space-y-6">
            <SectionCard title="Hero">
              <Field label="Tagline" value={content.hero.tagline} onChange={(v) => setSection("hero", { ...content.hero, tagline: v })} />
              <Field label="Heading" value={content.hero.heading} onChange={(v) => setSection("hero", { ...content.hero, heading: v })} />
              <Field label="Bio" value={content.hero.bio} onChange={(v) => setSection("hero", { ...content.hero, bio: v })} multiline />
              <Field label="CTA Label" value={content.hero.ctaLabel} onChange={(v) => setSection("hero", { ...content.hero, ctaLabel: v })} />
              <Field label="CTA Href" value={content.hero.ctaHref} onChange={(v) => setSection("hero", { ...content.hero, ctaHref: v })} />
              <Field label="Email" value={content.hero.email} onChange={(v) => setSection("hero", { ...content.hero, email: v })} />
              <Field label="LinkedIn URL" value={content.hero.linkedinUrl} onChange={(v) => setSection("hero", { ...content.hero, linkedinUrl: v })} />
              <Field label="GitHub URL" value={content.hero.githubUrl} onChange={(v) => setSection("hero", { ...content.hero, githubUrl: v })} />
              <Field label="Profile Image Path" value={content.hero.profileImage} onChange={(v) => setSection("hero", { ...content.hero, profileImage: v })} />
              <Field label="Profile Image Alt" value={content.hero.profileImageAlt} onChange={(v) => setSection("hero", { ...content.hero, profileImageAlt: v })} />
            </SectionCard>
            <SaveButton onClick={() => save("hero")} status={saveStatus["hero"] ?? "idle"} />
          </div>
        )}

        {/* ── About ── */}
        {activeTab === "About" && (
          <div className="space-y-6">
            <SectionCard title="Bio Paragraphs">
              {content.about.paragraphs.map((p, i) => (
                <div key={i} className="space-y-1.5">
                  <label className="block text-xs font-medium text-muted uppercase tracking-wider">Paragraph {i + 1}</label>
                  <div className="flex gap-2">
                    <textarea
                      rows={4}
                      value={p}
                      onChange={(e) => {
                        const updated = [...content.about.paragraphs];
                        updated[i] = e.target.value;
                        setSection("about", { ...content.about, paragraphs: updated });
                      }}
                      className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-violet/40 resize-y"
                    />
                    <button
                      onClick={() => {
                        const updated = content.about.paragraphs.filter((_, idx) => idx !== i);
                        setSection("about", { ...content.about, paragraphs: updated });
                      }}
                      className="self-start p-2 text-muted hover:text-rose transition-colors"
                      title="Remove paragraph"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={() => setSection("about", { ...content.about, paragraphs: [...content.about.paragraphs, ""] })}
                className="inline-flex items-center gap-2 text-sm text-violet hover:underline"
              >
                <Plus size={14} /> Add paragraph
              </button>
            </SectionCard>

            <SectionCard title="Stats">
              {content.about.stats.map((stat, i) => (
                <div key={i} className="grid grid-cols-2 gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                  <Field label="Label" value={stat.label} onChange={(v) => {
                    const updated = [...content.about.stats];
                    updated[i] = { ...updated[i], label: v };
                    setSection("about", { ...content.about, stats: updated });
                  }} />
                  <Field label="Value" value={stat.value} onChange={(v) => {
                    const updated = [...content.about.stats];
                    updated[i] = { ...updated[i], value: v };
                    setSection("about", { ...content.about, stats: updated });
                  }} />
                </div>
              ))}
            </SectionCard>

            <SaveButton onClick={() => save("about")} status={saveStatus["about"] ?? "idle"} />
          </div>
        )}

        {/* ── Mentoring ── */}
        {activeTab === "Mentoring" && (
          <div className="space-y-6">
            <SectionCard title="Banner">
              <Field label="Badge" value={content.mentoring.badge} onChange={(v) => setSection("mentoring", { ...content.mentoring, badge: v })} />
              <Field label="Heading" value={content.mentoring.heading} onChange={(v) => setSection("mentoring", { ...content.mentoring, heading: v })} />
              <Field label="Intro" value={content.mentoring.intro} onChange={(v) => setSection("mentoring", { ...content.mentoring, intro: v })} multiline />
              <Field label="CTA Label" value={content.mentoring.ctaLabel} onChange={(v) => setSection("mentoring", { ...content.mentoring, ctaLabel: v })} />
              <Field label="Calendly URL" value={content.mentoring.calendlyUrl} onChange={(v) => setSection("mentoring", { ...content.mentoring, calendlyUrl: v })} />
            </SectionCard>

            <SectionCard title="Offerings">
              <p className="text-xs text-muted uppercase tracking-wider font-medium">{content.mentoring.howICanHelp}</p>
              {content.mentoring.offerings.map((o, i) => (
                <div key={i} className="space-y-3 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted">Offering {i + 1}</span>
                    <button
                      onClick={() => {
                        const updated = content.mentoring.offerings.filter((_, idx) => idx !== i);
                        setSection("mentoring", { ...content.mentoring, offerings: updated });
                      }}
                      className="p-1.5 text-muted hover:text-rose transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <Field label="Title" value={o.title} onChange={(v) => {
                    const updated = [...content.mentoring.offerings];
                    updated[i] = { ...updated[i], title: v };
                    setSection("mentoring", { ...content.mentoring, offerings: updated });
                  }} />
                  <Field label="Description" value={o.description} onChange={(v) => {
                    const updated = [...content.mentoring.offerings];
                    updated[i] = { ...updated[i], description: v };
                    setSection("mentoring", { ...content.mentoring, offerings: updated });
                  }} multiline rows={2} />
                </div>
              ))}
              <button
                onClick={() => setSection("mentoring", {
                  ...content.mentoring,
                  offerings: [...content.mentoring.offerings, { icon: "MessageCircle", title: "", description: "", color: "bg-violet-light", iconColor: "text-violet" }],
                })}
                className="inline-flex items-center gap-2 text-sm text-violet hover:underline"
              >
                <Plus size={14} /> Add offering
              </button>
            </SectionCard>

            <SectionCard title="Footer CTA">
              <Field label="Heading" value={content.mentoring.footerHeading} onChange={(v) => setSection("mentoring", { ...content.mentoring, footerHeading: v })} />
              <Field label="Body" value={content.mentoring.footerBody} onChange={(v) => setSection("mentoring", { ...content.mentoring, footerBody: v })} multiline rows={2} />
              <Field label="CTA Label" value={content.mentoring.footerCtaLabel} onChange={(v) => setSection("mentoring", { ...content.mentoring, footerCtaLabel: v })} />
              <Field label="Email" value={content.mentoring.email} onChange={(v) => setSection("mentoring", { ...content.mentoring, email: v })} />
            </SectionCard>

            <SaveButton onClick={() => save("mentoring")} status={saveStatus["mentoring"] ?? "idle"} />
          </div>
        )}

        {/* ── Portfolio ── */}
        {activeTab === "Portfolio" && (
          <div className="space-y-6">
            <SectionCard title="Section">
              <Field label="Intro" value={content.portfolio.intro} onChange={(v) => setSection("portfolio", { ...content.portfolio, intro: v })} />
              <Field label="GitHub URL" value={content.portfolio.githubUrl} onChange={(v) => setSection("portfolio", { ...content.portfolio, githubUrl: v })} />
            </SectionCard>

            <SectionCard title="Projects">
              {content.portfolio.projects.map((p, i) => (
                <div key={i} className="space-y-3 pb-5 border-b border-border last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted">Project {i + 1}</span>
                    <button
                      onClick={() => {
                        const updated = content.portfolio.projects.filter((_, idx) => idx !== i);
                        setSection("portfolio", { ...content.portfolio, projects: updated });
                      }}
                      className="p-1.5 text-muted hover:text-rose transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <Field label="Title" value={p.title} onChange={(v) => {
                    const updated = [...content.portfolio.projects];
                    updated[i] = { ...updated[i], title: v };
                    setSection("portfolio", { ...content.portfolio, projects: updated });
                  }} />
                  <Field label="Description" value={p.description} onChange={(v) => {
                    const updated = [...content.portfolio.projects];
                    updated[i] = { ...updated[i], description: v };
                    setSection("portfolio", { ...content.portfolio, projects: updated });
                  }} multiline rows={2} />
                  <Field label="URL" value={p.url} onChange={(v) => {
                    const updated = [...content.portfolio.projects];
                    updated[i] = { ...updated[i], url: v };
                    setSection("portfolio", { ...content.portfolio, projects: updated });
                  }} />
                  <div>
                    <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">Tech tags (comma-separated)</label>
                    <input
                      type="text"
                      value={p.tech.join(", ")}
                      onChange={(e) => {
                        const updated = [...content.portfolio.projects];
                        updated[i] = { ...updated[i], tech: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) };
                        setSection("portfolio", { ...content.portfolio, projects: updated });
                      }}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-violet/40"
                    />
                  </div>
                </div>
              ))}
              <button
                onClick={() => setSection("portfolio", {
                  ...content.portfolio,
                  projects: [...content.portfolio.projects, {
                    title: "",
                    description: "",
                    tech: [],
                    url: "",
                    accent: "group-hover:border-violet/40",
                    hover: "group-hover:text-violet",
                    glow: "group-hover:shadow-violet/10",
                  }],
                })}
                className="inline-flex items-center gap-2 text-sm text-violet hover:underline"
              >
                <Plus size={14} /> Add project
              </button>
            </SectionCard>

            <SaveButton onClick={() => save("portfolio")} status={saveStatus["portfolio"] ?? "idle"} />
          </div>
        )}

        {/* ── Speaking ── */}
        {activeTab === "Speaking" && (
          <div className="space-y-6">
            <SectionCard title="Section">
              <Field label="Intro" value={content.speaking.intro} onChange={(v) => setSection("speaking", { ...content.speaking, intro: v })} multiline />
              <Field label="CTA Label" value={content.speaking.ctaLabel} onChange={(v) => setSection("speaking", { ...content.speaking, ctaLabel: v })} />
              <Field label="Email" value={content.speaking.email} onChange={(v) => setSection("speaking", { ...content.speaking, email: v })} />
            </SectionCard>

            <SectionCard title="Topics">
              {content.speaking.topics.map((t, i) => (
                <div key={i} className="space-y-3 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted">Topic {i + 1}</span>
                    <button
                      onClick={() => {
                        const updated = content.speaking.topics.filter((_, idx) => idx !== i);
                        setSection("speaking", { ...content.speaking, topics: updated });
                      }}
                      className="p-1.5 text-muted hover:text-rose transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <Field label="Title" value={t.title} onChange={(v) => {
                    const updated = [...content.speaking.topics];
                    updated[i] = { ...updated[i], title: v };
                    setSection("speaking", { ...content.speaking, topics: updated });
                  }} />
                  <Field label="Description" value={t.description} onChange={(v) => {
                    const updated = [...content.speaking.topics];
                    updated[i] = { ...updated[i], description: v };
                    setSection("speaking", { ...content.speaking, topics: updated });
                  }} multiline rows={2} />
                </div>
              ))}
              <button
                onClick={() => setSection("speaking", {
                  ...content.speaking,
                  topics: [...content.speaking.topics, { title: "", description: "", bg: "bg-mint-light" }],
                })}
                className="inline-flex items-center gap-2 text-sm text-violet hover:underline"
              >
                <Plus size={14} /> Add topic
              </button>
            </SectionCard>

            <SaveButton onClick={() => save("speaking")} status={saveStatus["speaking"] ?? "idle"} />
          </div>
        )}

        {/* ── Content Section ── */}
        {activeTab === "Content" && (
          <div className="space-y-6">
            <SectionCard title="Section">
              <Field label="Heading" value={content["content-section"].heading} onChange={(v) => setSection("content-section", { ...content["content-section"], heading: v })} />
              <Field label="Intro" value={content["content-section"].intro} onChange={(v) => setSection("content-section", { ...content["content-section"], intro: v })} multiline />
            </SectionCard>

            <SectionCard title="Formats">
              {content["content-section"].formats.map((f, i) => (
                <div key={i} className="space-y-3 pb-4 border-b border-border last:border-0 last:pb-0">
                  <span className="text-xs font-medium text-muted">Format {i + 1}</span>
                  <Field label="Title" value={f.title} onChange={(v) => {
                    const updated = [...content["content-section"].formats];
                    updated[i] = { ...updated[i], title: v };
                    setSection("content-section", { ...content["content-section"], formats: updated });
                  }} />
                  <Field label="Description" value={f.description} onChange={(v) => {
                    const updated = [...content["content-section"].formats];
                    updated[i] = { ...updated[i], description: v };
                    setSection("content-section", { ...content["content-section"], formats: updated });
                  }} multiline rows={2} />
                </div>
              ))}
            </SectionCard>

            <SectionCard title="Follow CTA">
              <Field label="Heading" value={content["content-section"].followHeading} onChange={(v) => setSection("content-section", { ...content["content-section"], followHeading: v })} />
              <Field label="Body" value={content["content-section"].followBody} onChange={(v) => setSection("content-section", { ...content["content-section"], followBody: v })} />
              <Field label="CTA Label" value={content["content-section"].followCtaLabel} onChange={(v) => setSection("content-section", { ...content["content-section"], followCtaLabel: v })} />
              <Field label="LinkedIn URL" value={content["content-section"].linkedinUrl} onChange={(v) => setSection("content-section", { ...content["content-section"], linkedinUrl: v })} />
            </SectionCard>

            <SaveButton onClick={() => save("content-section")} status={saveStatus["content-section"] ?? "idle"} />
          </div>
        )}

        {/* ── Meta ── */}
        {activeTab === "Meta" && (
          <div className="space-y-6">
            <SectionCard title="Page Metadata">
              <Field label="Title" value={content.meta.title} onChange={(v) => setSection("meta", { ...content.meta, title: v })} />
              <Field label="Description" value={content.meta.description} onChange={(v) => setSection("meta", { ...content.meta, description: v })} multiline rows={2} />
              <Field label="OG Title" value={content.meta.ogTitle} onChange={(v) => setSection("meta", { ...content.meta, ogTitle: v })} />
              <Field label="OG Description" value={content.meta.ogDescription} onChange={(v) => setSection("meta", { ...content.meta, ogDescription: v })} multiline rows={2} />
            </SectionCard>
            <SaveButton onClick={() => save("meta")} status={saveStatus["meta"] ?? "idle"} />
          </div>
        )}
      </div>
    </div>
  );
}
