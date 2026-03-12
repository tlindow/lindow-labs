"use client";

import { FormEvent, useState } from "react";
import type { SiteContent } from "@/lib/site-content-schema";
import { defaultSiteContent, normalizeSiteContent } from "@/lib/site-content-schema";

type CmsStatus = "loading" | "login" | "ready" | "error";

interface ContentResponse {
  content: SiteContent;
  storage: "upstash" | "filesystem";
}

export default function CmsPage() {
  const [status, setStatus] = useState<CmsStatus>("login");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState<SiteContent>(
    normalizeSiteContent(defaultSiteContent)
  );
  const [storage, setStorage] = useState<ContentResponse["storage"]>("filesystem");
  const [saving, setSaving] = useState(false);

  async function loadContent() {
    setStatus("loading");
    setError("");

    const response = await fetch("/api/cms/content", {
      method: "GET",
      cache: "no-store",
    });

    if (response.status === 401) {
      setStatus("login");
      return;
    }

    if (response.status === 503) {
      const body = (await response.json().catch(() => ({}))) as { error?: string };
      setStatus("error");
      setError(
        body.error ??
          "CMS_PASSWORD is missing. Add it to your environment, then reload /cms."
      );
      return;
    }

    if (!response.ok) {
      setStatus("error");
      setError("Could not load CMS content.");
      return;
    }

    const body = (await response.json()) as ContentResponse;
    setContent(normalizeSiteContent(body.content));
    setStorage(body.storage);
    setStatus("ready");
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const response = await fetch("/api/cms/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => ({}))) as { error?: string };
      setError(body.error ?? "Login failed.");
      return;
    }

    setPassword("");
    await loadContent();
  }

  async function handleLogout() {
    await fetch("/api/cms/logout", { method: "POST" });
    setStatus("login");
  }

  async function handleSave() {
    setSaving(true);
    setError("");

    const response = await fetch("/api/cms/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => ({}))) as { error?: string };
      setError(body.error ?? "Save failed.");
      setSaving(false);
      return;
    }

    const body = (await response.json()) as { content: SiteContent };
    setContent(normalizeSiteContent(body.content));
    setSaving(false);
  }

  function updateEventField(
    index: number,
    field: "date" | "title" | "format" | "description",
    value: string
  ) {
    setContent((previous) => {
      const items = previous.events.items.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item
      );

      return {
        ...previous,
        events: {
          ...previous.events,
          items,
        },
      };
    });
  }

  function addEvent() {
    setContent((previous) => ({
      ...previous,
      events: {
        ...previous.events,
        items: [
          ...previous.events.items,
          {
            date: "New date",
            title: "New event title",
            format: "Event format",
            description: "Event description",
          },
        ],
      },
    }));
  }

  function removeEvent(index: number) {
    setContent((previous) => ({
      ...previous,
      events: {
        ...previous.events,
        items: previous.events.items.filter((_, itemIndex) => itemIndex !== index),
      },
    }));
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">CMS</p>
        <h1 className="mt-2 font-display text-4xl text-foreground">Content editor</h1>
        <p className="mt-2 text-sm text-muted">
          Edit content from your phone at <strong>/cms</strong>.
        </p>
      </div>

      {status === "loading" && (
        <div className="glass rounded-md px-5 py-4 text-sm text-muted">
          Loading content...
        </div>
      )}

      {status === "error" && (
        <div className="glass rounded-md px-5 py-4 text-sm text-muted">{error}</div>
      )}

      {status === "login" && (
        <form className="glass rounded-md p-6 sm:p-8" onSubmit={handleLogin}>
          <h2 className="font-display text-3xl text-foreground">Sign in</h2>
          <p className="mt-2 text-sm text-muted">
            Use the CMS password set in your environment (`CMS_PASSWORD`).
          </p>

          <label className="mt-5 block text-xs uppercase tracking-[0.16em] text-muted">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-2 w-full rounded-sm border border-border bg-surface-elevated px-3 py-2 text-sm text-foreground"
            required
          />

          {error && <p className="mt-3 text-sm text-red-700">{error}</p>}

          <button
            type="submit"
            className="mt-5 inline-flex rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-accent-strong"
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => void loadContent()}
            className="ml-3 mt-5 inline-flex rounded-sm border border-border px-4 py-2 text-sm font-medium text-foreground"
          >
            Use existing session
          </button>
        </form>
      )}

      {status === "ready" && (
        <div className="space-y-8">
          <div className="glass flex flex-col gap-2 rounded-md px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              Storage:{" "}
              <strong>
                {storage === "upstash" ? "Upstash Redis (persistent)" : "Filesystem"}
              </strong>
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleLogout}
                className="rounded-sm border border-border px-3 py-2 text-xs font-medium uppercase tracking-[0.08em] text-foreground"
              >
                Log out
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="rounded-sm bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-foreground transition-colors hover:bg-accent-strong disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save changes"}
              </button>
            </div>
          </div>

          {error && <p className="text-sm text-red-700">{error}</p>}

          <section className="glass rounded-md p-5 sm:p-6">
            <h2 className="font-display text-3xl text-foreground">Hero</h2>
            <div className="mt-4 grid gap-4">
              <TextField
                label="Eyebrow"
                value={content.hero.eyebrow}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    hero: { ...previous.hero, eyebrow: value },
                  }))
                }
              />
              <TextField
                label="Title"
                value={content.hero.title}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    hero: { ...previous.hero, title: value },
                  }))
                }
              />
              <TextAreaField
                label="Description"
                value={content.hero.description}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    hero: { ...previous.hero, description: value },
                  }))
                }
              />
              <TextField
                label="Primary CTA label"
                value={content.hero.primaryCta.label}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    hero: {
                      ...previous.hero,
                      primaryCta: { ...previous.hero.primaryCta, label: value },
                    },
                  }))
                }
              />
              <TextField
                label="Primary CTA href"
                value={content.hero.primaryCta.href}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    hero: {
                      ...previous.hero,
                      primaryCta: { ...previous.hero.primaryCta, href: value },
                    },
                  }))
                }
              />
              <TextField
                label="Secondary CTA label"
                value={content.hero.secondaryCta.label}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    hero: {
                      ...previous.hero,
                      secondaryCta: { ...previous.hero.secondaryCta, label: value },
                    },
                  }))
                }
              />
              <TextField
                label="Secondary CTA href"
                value={content.hero.secondaryCta.href}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    hero: {
                      ...previous.hero,
                      secondaryCta: { ...previous.hero.secondaryCta, href: value },
                    },
                  }))
                }
              />
            </div>
          </section>

          <section className="glass rounded-md p-5 sm:p-6">
            <h2 className="font-display text-3xl text-foreground">Events section</h2>
            <div className="mt-4 grid gap-4">
              <TextField
                label="Section eyebrow"
                value={content.events.eyebrow}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    events: { ...previous.events, eyebrow: value },
                  }))
                }
              />
              <TextField
                label="Section title"
                value={content.events.title}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    events: { ...previous.events, title: value },
                  }))
                }
              />
              <TextAreaField
                label="Section description"
                value={content.events.description}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    events: { ...previous.events, description: value },
                  }))
                }
              />
            </div>

            <div className="mt-6 space-y-4">
              {content.events.items.map((event, index) => (
                <div key={`${event.title}-${index}`} className="rounded-sm border border-border p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.14em] text-muted">
                      Event {index + 1}
                    </p>
                    <button
                      onClick={() => removeEvent(index)}
                      className="text-xs uppercase tracking-[0.1em] text-red-700"
                      type="button"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid gap-3">
                    <TextField
                      label="Date"
                      value={event.date}
                      onChange={(value) => updateEventField(index, "date", value)}
                    />
                    <TextField
                      label="Title"
                      value={event.title}
                      onChange={(value) => updateEventField(index, "title", value)}
                    />
                    <TextField
                      label="Format"
                      value={event.format}
                      onChange={(value) => updateEventField(index, "format", value)}
                    />
                    <TextAreaField
                      label="Description"
                      value={event.description}
                      onChange={(value) => updateEventField(index, "description", value)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addEvent}
              className="mt-4 rounded-sm border border-border px-3 py-2 text-xs font-medium uppercase tracking-[0.08em] text-foreground"
            >
              Add event
            </button>
          </section>

          <section className="glass rounded-md p-5 sm:p-6">
            <h2 className="font-display text-3xl text-foreground">Signup block</h2>
            <div className="mt-4 grid gap-4">
              <TextField
                label="Eyebrow"
                value={content.events.signup.eyebrow}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    events: {
                      ...previous.events,
                      signup: { ...previous.events.signup, eyebrow: value },
                    },
                  }))
                }
              />
              <TextField
                label="Title"
                value={content.events.signup.title}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    events: {
                      ...previous.events,
                      signup: { ...previous.events.signup, title: value },
                    },
                  }))
                }
              />
              <TextAreaField
                label="Description"
                value={content.events.signup.description}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    events: {
                      ...previous.events,
                      signup: { ...previous.events.signup, description: value },
                    },
                  }))
                }
              />
              <TextField
                label="Primary CTA label"
                value={content.events.signup.primaryCta.label}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    events: {
                      ...previous.events,
                      signup: {
                        ...previous.events.signup,
                        primaryCta: {
                          ...previous.events.signup.primaryCta,
                          label: value,
                        },
                      },
                    },
                  }))
                }
              />
              <TextField
                label="Primary CTA href"
                value={content.events.signup.primaryCta.href}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    events: {
                      ...previous.events,
                      signup: {
                        ...previous.events.signup,
                        primaryCta: {
                          ...previous.events.signup.primaryCta,
                          href: value,
                        },
                      },
                    },
                  }))
                }
              />
              <TextField
                label="Secondary CTA label"
                value={content.events.signup.secondaryCta.label}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    events: {
                      ...previous.events,
                      signup: {
                        ...previous.events.signup,
                        secondaryCta: {
                          ...previous.events.signup.secondaryCta,
                          label: value,
                        },
                      },
                    },
                  }))
                }
              />
              <TextField
                label="Secondary CTA href"
                value={content.events.signup.secondaryCta.href}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    events: {
                      ...previous.events,
                      signup: {
                        ...previous.events.signup,
                        secondaryCta: {
                          ...previous.events.signup.secondaryCta,
                          href: value,
                        },
                      },
                    },
                  }))
                }
              />
            </div>
          </section>

          <section className="glass rounded-md p-5 sm:p-6">
            <h2 className="font-display text-3xl text-foreground">Footer</h2>
            <div className="mt-4 grid gap-4">
              <TextField
                label="Brand"
                value={content.footer.brand}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    footer: { ...previous.footer, brand: value },
                  }))
                }
              />
              <TextAreaField
                label="Tagline"
                value={content.footer.tagline}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    footer: { ...previous.footer, tagline: value },
                  }))
                }
              />
              <TextField
                label="Copyright name"
                value={content.footer.copyrightName}
                onChange={(value) =>
                  setContent((previous) => ({
                    ...previous,
                    footer: { ...previous.footer, copyrightName: value },
                  }))
                }
              />
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

function TextField({ label, value, onChange }: TextFieldProps) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.14em] text-muted">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-sm border border-border bg-surface-elevated px-3 py-2 text-sm text-foreground"
      />
    </label>
  );
}

function TextAreaField({ label, value, onChange }: TextFieldProps) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.14em] text-muted">{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-h-24 w-full rounded-sm border border-border bg-surface-elevated px-3 py-2 text-sm text-foreground"
      />
    </label>
  );
}
