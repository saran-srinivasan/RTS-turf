"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Facilities from "@/components/sections/Facilities";
import Sports from "@/components/sections/Sports";
import Pricing from "@/components/sections/Pricing";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Facilities />
      <Sports />
      <Pricing />
      <Gallery />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
    </>
  );
}
