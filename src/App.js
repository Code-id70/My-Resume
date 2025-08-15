import React, { useRef, useState, useEffect } from "react";
import { Home, Biography, Portfolio, Services, News, Contact } from "./components/sections";
import TopNavbar from "./components/TopNavbar";

function App() {
  const [activeSection, setActiveSection] = useState("HOME");

  const sectionsRef = useRef({
    home: null,
    biography: null,
    portfolio: null,
    services: null,
    news: null,
    contact: null,
  });

  const scrollToSection = (sectionId) => {
    const section = sectionsRef.current[sectionId];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offsets = Object.entries(sectionsRef.current).map(([key, ref]) => ({
        id: key,
        offset: ref?.getBoundingClientRect().top ?? Infinity
      }));

      const visibleSection = offsets.reduce((closest, current) =>
        Math.abs(current.offset) < Math.abs(closest.offset) ? current : closest
      );

      setActiveSection(visibleSection.id.toUpperCase());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionsRef]); // ✅ no eslint warning

  return (
    <div>
      <TopNavbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <section ref={(el) => (sectionsRef.current.home = el)}><Home /></section>
      <section ref={(el) => (sectionsRef.current.biography = el)}><Biography /></section>
      <section ref={(el) => (sectionsRef.current.portfolio = el)}><Portfolio /></section>
      <section ref={(el) => (sectionsRef.current.services = el)}><Services /></section>
      <section ref={(el) => (sectionsRef.current.news = el)}><News /></section>
      <section ref={(el) => (sectionsRef.current.contact = el)}><Contact /></section>
    </div>
  );
}

export default App;
