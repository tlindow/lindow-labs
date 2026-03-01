import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mentoring from "@/components/Mentoring";
import Portfolio from "@/components/Portfolio";
import Speaking from "@/components/Speaking";
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
        <Mentoring />
        <Portfolio />
        <Speaking />
        <Content />
        <TechStack />
      </main>
      <Footer />
    </>
  );
}
