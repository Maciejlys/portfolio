import React, { useState } from "react";
import MobileBar from "../components/MobileBar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Section from "../components/Section";
import { about, experience } from "../Data/sectionData";
import SkillsSection from "../components/SkillsSection";

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
      <Section {...experience} />
      <SkillsSection />
    </>
  );
};
