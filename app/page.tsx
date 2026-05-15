

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AboutSection from "./components/section/About";
import ContactSection from "./components/section/ContactSection";
import ExperienceSection from "./components/section/ExperienceSection";
import HeroSection from "./components/section/Hero";
import ProjectsSection from "./components/section/ProjectsSection";
import RecommendationSection from "./components/section/RecommendationSection";
import SkillsSection from "./components/section/SkillsSection"



export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection />
    <AboutSection/>
    <ProjectsSection />
    <ExperienceSection/>
    <RecommendationSection/>
    <SkillsSection/>
    <ContactSection/>
    <Footer/>
    </>
  );
}
