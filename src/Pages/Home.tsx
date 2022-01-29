import React, { useState } from "react";
import MobileBar from "../components/MobileBar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
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
      <AboutSection />
      <ExperienceSection />
    </>
  );
};
