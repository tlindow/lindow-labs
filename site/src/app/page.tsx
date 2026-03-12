import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import { getSiteContent } from "@/lib/site-content";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <>
      <Navbar brand={content.nav.brand} links={content.nav.links} />
      <main>
        <Hero
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          description={content.hero.description}
          primaryCta={content.hero.primaryCta}
          secondaryCta={content.hero.secondaryCta}
        />
        <Events
          eyebrow={content.events.eyebrow}
          title={content.events.title}
          description={content.events.description}
          items={content.events.items}
          signup={content.events.signup}
        />
      </main>
      <Footer
        brand={content.footer.brand}
        tagline={content.footer.tagline}
        navigateLabel={content.footer.navigateLabel}
        links={content.footer.links}
        copyrightName={content.footer.copyrightName}
      />
    </>
  );
}
