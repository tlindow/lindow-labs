"use client";

import { Check } from "lucide-react";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";

const tiers = [
  {
    name: "Drop-in",
    price: "$25",
    cadence: "per day",
    blurb: "One day on the bench. Come test the water.",
    perks: [
      "Full shop access on any open day",
      "One guest pass (bring a friend)",
      "Tools and consumables included",
    ],
    cta: "Book a day",
    href: "mailto:hello@thetinkerhub.co?subject=Drop-in%20visit",
    featured: false,
  },
  {
    name: "Resident",
    price: "$149",
    cadence: "per month",
    blurb: "Your home bench. The default answer to “where tonight?”",
    perks: [
      "24/7 keycard access",
      "Dedicated storage cube",
      "Member rate on all tracks",
      "Two guest passes a month",
    ],
    cta: "Start residency",
    href: "mailto:hello@thetinkerhub.co?subject=Resident%20membership",
    featured: true,
  },
  {
    name: "Founding Tinker",
    price: "$99",
    cadence: "per month, locked",
    blurb: "First 50 members. Price never changes as long as you stay.",
    perks: [
      "Everything in Resident",
      "Name on the founding wall",
      "Priority on new equipment requests",
      "Lifetime founder rate",
    ],
    cta: "Claim a spot",
    href: "mailto:hello@thetinkerhub.co?subject=Founding%20Tinker",
    featured: false,
  },
];

export default function Membership() {
  return (
    <section id="membership" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-mint">
            Membership
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            Join the Hub.
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-mint" />
          <p className="mt-5 text-[15px] sm:text-lg text-muted max-w-2xl">
            Three ways in. The shop is the same; the cadence is up to you.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="mt-10 sm:mt-14 grid md:grid-cols-3 gap-4 sm:gap-6"
          staggerDelay={0.12}
        >
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <article
                className={`relative h-full rounded-2xl border p-6 sm:p-7 flex flex-col ${
                  tier.featured
                    ? "bg-foreground text-background border-foreground"
                    : "bg-surface border-border"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-amber px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-foreground">
                    Most chosen
                  </span>
                )}
                <h3
                  className={`font-display text-xl sm:text-2xl ${
                    tier.featured ? "text-background" : "text-foreground"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    tier.featured ? "text-background/70" : "text-muted"
                  }`}
                >
                  {tier.blurb}
                </p>

                <div className="mt-5 flex items-baseline gap-2">
                  <span
                    className={`font-display text-3xl sm:text-4xl font-bold ${
                      tier.featured ? "text-background" : "text-foreground"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-xs sm:text-sm ${
                      tier.featured ? "text-background/60" : "text-muted"
                    }`}
                  >
                    {tier.cadence}
                  </span>
                </div>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {tier.perks.map((perk) => (
                    <li
                      key={perk}
                      className={`flex items-start gap-2 text-sm ${
                        tier.featured ? "text-background/85" : "text-foreground/80"
                      }`}
                    >
                      <Check
                        size={16}
                        strokeWidth={2.5}
                        className={`mt-[3px] flex-shrink-0 ${
                          tier.featured ? "text-amber" : "text-mint"
                        }`}
                      />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <MagneticButton
                  href={tier.href}
                  className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    tier.featured
                      ? "bg-amber text-foreground hover:bg-peach"
                      : "bg-foreground text-background hover:bg-amber hover:text-foreground"
                  }`}
                >
                  {tier.cta}
                </MagneticButton>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
