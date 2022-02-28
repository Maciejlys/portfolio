import React, { useState } from "react";
import MobileBar from "../components/MobileBar";
import Navbar from "../components/Navbar";
import HeroSection from "../modules/HeroSection";
import Section from "../modules/Section";
import { about, experience } from "../data/sectionData";
import SkillsSection from "../modules/SkillsSection";
import { ProjectsSection } from "../modules/ProjectsSection";

export interface NavProps {
  toggleMenu: () => void;
  isOpen?: boolean;
}
export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <MobileBar isOpen={isOpen} toggleMenu={toggleMenu} />
      <HeroSection />
      <Section {...about} />
      <SkillsSection />
      <Section {...experience} />
      <ProjectsSection />
    </>
  );
};
