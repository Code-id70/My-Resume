import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/hero/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import FeaturedProjectSection from "./components/sections/FeaturedProjectSection";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <FeaturedProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;