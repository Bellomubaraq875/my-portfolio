

import Header from "./components/layout/Header";
import AboutSection from "./components/section/About";
import ContactSection from "./components/section/ContactSection";
import HeroSection from "./components/section/Hero";
import ProjectsSection from "./components/section/ProjectsSection";
import RecommendationSection from "./components/section/RecommendationSection";


export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection />
    <AboutSection/>
    <ProjectsSection />
    <RecommendationSection/>
    <ContactSection/>
    </>
  );
}
