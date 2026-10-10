"use client";

import Footer from "./components/footer";
import Hero from "./components/hero";
import SkillsCarousel from "./components/skills-carousel";
import AboutSection from "./components/sections/about-section";
import ContactSection from "./components/sections/contact-section";
import EducationSection from "./components/sections/education-section";
import WorkSection from "./components/sections/work-section";
import WhatsappIcon from "./components/whatsapp-icon";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatsappIcon />
      <SkillsCarousel />
      <EducationSection />
      <AboutSection />
      {/* <WorkSection /> */}
      <ContactSection />
      <Footer />
    </>
  );
}
