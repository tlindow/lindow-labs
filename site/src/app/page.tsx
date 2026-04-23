import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Idea from "@/components/Idea";
import Space from "@/components/Space";
import Tracks from "@/components/Tracks";
import Schedule from "@/components/Schedule";
import Membership from "@/components/Membership";
import Toolkit from "@/components/Toolkit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Idea />
        <Space />
        <Tracks />
        <Schedule />
        <Membership />
        <Toolkit />
      </main>
      <Footer />
    </>
  );
}
