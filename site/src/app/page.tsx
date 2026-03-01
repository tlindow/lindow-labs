import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Speaking from "@/components/Speaking";
import Mentoring from "@/components/Mentoring";
import Content from "@/components/Content";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Speaking />
        <Mentoring />
        <Content />
        <TechStack />
      </main>
      <Footer />
    </>
  );
}
