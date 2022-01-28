import React from "react";
import { importFromPublic } from "../utils/publicImportUtil";
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  HeroSpan,
  VideoBg,
} from "./HeroElements";

interface indexProps {}

export const HeroSection: React.FC<indexProps> = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={importFromPublic("assets/video.mp4")}
        />
      </HeroBg>
      <HeroContent>
        <HeroSpan>Hi, my name is</HeroSpan>
        <HeroH1>Maciej Łyszczarz.</HeroH1>
        <HeroH2>I build things for the web.</HeroH2>
        <HeroP>I'm a student that learns how to build websites.</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};
