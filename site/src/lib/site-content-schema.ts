export interface ContentLink {
  label: string;
  href: string;
}

export interface EventItem {
  date: string;
  title: string;
  format: string;
  description: string;
}

export interface SiteContent {
  nav: {
    brand: string;
    links: ContentLink[];
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: ContentLink;
    secondaryCta: ContentLink;
  };
  events: {
    eyebrow: string;
    title: string;
    description: string;
    items: EventItem[];
    signup: {
      eyebrow: string;
      title: string;
      description: string;
      primaryCta: ContentLink;
      secondaryCta: ContentLink;
    };
  };
  footer: {
    brand: string;
    tagline: string;
    navigateLabel: string;
    links: ContentLink[];
    copyrightName: string;
  };
}

export const defaultSiteContent: SiteContent = {
  nav: {
    brand: "Tyler Lindow",
    links: [
      { label: "Events", href: "#events" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    eyebrow: "Tyler Lindow Studio",
    title: "Premium events crafted with calm precision.",
    description:
      "A focused studio for builders and operators who want thoughtful gatherings, practical conversations, and fewer empty trends.",
    primaryCta: {
      label: "Explore events",
      href: "#events",
    },
    secondaryCta: {
      label: "Sign up for events",
      href: "#contact",
    },
  },
  events: {
    eyebrow: "Events",
    title: "Curated gatherings for builders who prefer depth over noise.",
    description:
      "A focused calendar of experiences designed to be useful, human, and high-signal. Sign up to receive first access and limited-capacity invitations.",
    items: [
      {
        date: "Apr 24, 2026",
        title: "Desert Product Salon",
        format: "In-person · San Diego",
        description:
          "An intimate evening on product craft, creative discipline, and building with intention.",
      },
      {
        date: "May 15, 2026",
        title: "Studio Systems Workshop",
        format: "Live virtual session",
        description:
          "A tactical workshop on setting up repeatable systems for design, content, and execution.",
      },
      {
        date: "Jun 07, 2026",
        title: "Founders on the Coast",
        format: "Private roundtable · Invite only",
        description:
          "A small-format strategic conversation for builders shipping ambitious ideas with clarity.",
      },
    ],
    signup: {
      eyebrow: "Sign up for events",
      title: "Join the priority event list.",
      description:
        "No fluff, no spam. You will only receive event invitations, schedule updates, and limited-seat announcements.",
      primaryCta: {
        label: "Sign up for events",
        href: "mailto:tyler.lindow@gmail.com?subject=Event%20Signup&body=Please%20add%20me%20to%20the%20event%20list.",
      },
      secondaryCta: {
        label: "Ask a question",
        href: "mailto:tyler.lindow@gmail.com?subject=Event%20Question",
      },
    },
  },
  footer: {
    brand: "Tyler Lindow",
    tagline: "Studio-standard digital experiences with a calm, premium point of view.",
    navigateLabel: "Navigate",
    links: [
      { label: "Top", href: "#" },
      { label: "Events", href: "#events" },
      { label: "Sign Up", href: "#contact" },
    ],
    copyrightName: "Tyler Lindow Studio",
  },
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readString(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim().length > 0 ? value : fallback;
}

function normalizeLink(value: unknown, fallback: ContentLink): ContentLink {
  const source = isRecord(value) ? value : {};
  return {
    label: readString(source.label, fallback.label),
    href: readString(source.href, fallback.href),
  };
}

function normalizeEventItem(value: unknown, fallback: EventItem): EventItem {
  const source = isRecord(value) ? value : {};
  return {
    date: readString(source.date, fallback.date),
    title: readString(source.title, fallback.title),
    format: readString(source.format, fallback.format),
    description: readString(source.description, fallback.description),
  };
}

function normalizeLinks(value: unknown, fallback: ContentLink[]): ContentLink[] {
  if (!Array.isArray(value) || value.length === 0) {
    return fallback.map((link) => ({ ...link }));
  }

  return value.map((link, index) =>
    normalizeLink(link, fallback[index] ?? fallback[fallback.length - 1])
  );
}

function normalizeEventItems(value: unknown, fallback: EventItem[]): EventItem[] {
  if (!Array.isArray(value) || value.length === 0) {
    return fallback.map((item) => ({ ...item }));
  }

  return value.map((item, index) =>
    normalizeEventItem(item, fallback[index] ?? fallback[fallback.length - 1])
  );
}

export function normalizeSiteContent(value: unknown): SiteContent {
  const source = isRecord(value) ? value : {};
  const nav = isRecord(source.nav) ? source.nav : {};
  const hero = isRecord(source.hero) ? source.hero : {};
  const events = isRecord(source.events) ? source.events : {};
  const signup = isRecord(events.signup) ? events.signup : {};
  const footer = isRecord(source.footer) ? source.footer : {};

  return {
    nav: {
      brand: readString(nav.brand, defaultSiteContent.nav.brand),
      links: normalizeLinks(nav.links, defaultSiteContent.nav.links),
    },
    hero: {
      eyebrow: readString(hero.eyebrow, defaultSiteContent.hero.eyebrow),
      title: readString(hero.title, defaultSiteContent.hero.title),
      description: readString(hero.description, defaultSiteContent.hero.description),
      primaryCta: normalizeLink(hero.primaryCta, defaultSiteContent.hero.primaryCta),
      secondaryCta: normalizeLink(
        hero.secondaryCta,
        defaultSiteContent.hero.secondaryCta
      ),
    },
    events: {
      eyebrow: readString(events.eyebrow, defaultSiteContent.events.eyebrow),
      title: readString(events.title, defaultSiteContent.events.title),
      description: readString(events.description, defaultSiteContent.events.description),
      items: normalizeEventItems(events.items, defaultSiteContent.events.items),
      signup: {
        eyebrow: readString(signup.eyebrow, defaultSiteContent.events.signup.eyebrow),
        title: readString(signup.title, defaultSiteContent.events.signup.title),
        description: readString(
          signup.description,
          defaultSiteContent.events.signup.description
        ),
        primaryCta: normalizeLink(
          signup.primaryCta,
          defaultSiteContent.events.signup.primaryCta
        ),
        secondaryCta: normalizeLink(
          signup.secondaryCta,
          defaultSiteContent.events.signup.secondaryCta
        ),
      },
    },
    footer: {
      brand: readString(footer.brand, defaultSiteContent.footer.brand),
      tagline: readString(footer.tagline, defaultSiteContent.footer.tagline),
      navigateLabel: readString(
        footer.navigateLabel,
        defaultSiteContent.footer.navigateLabel
      ),
      links: normalizeLinks(footer.links, defaultSiteContent.footer.links),
      copyrightName: readString(
        footer.copyrightName,
        defaultSiteContent.footer.copyrightName
      ),
    },
  };
}
