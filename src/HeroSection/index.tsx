import React from "react";
import { importFromPublic } from "../utils/publicImportUtil";
import { HeroBg, HeroContainer, VideoBg } from "./HeroElements";

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
    </HeroContainer>
  );
};
