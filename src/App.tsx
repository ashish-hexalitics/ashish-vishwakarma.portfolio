// src/App.tsx
import React from "react";
import { BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
// import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App: React.FC = () => (
  <>
    <Header />
    <BrowserRouter>
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        {/* <ContactSection /> */}
      </main>
    </BrowserRouter>
    <Footer />
  </>
);

export default App;
