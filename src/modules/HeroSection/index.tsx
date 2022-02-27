import { motion } from "framer-motion";
import React from "react";
import { importFromPublic } from "../../utils/publicImportUtil";
import { OnHoverZoom } from "../../components/FramerAnimations/Motions";
import { HeroBg, HeroContainer, HeroContent } from "./HeroElements";
import Particles from "react-tsparticles";

interface indexProps {}

export const HeroSection: React.FC<indexProps> = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <Particles
          height="900px"
          options={{
            fullScreen: { enable: false },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 1,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 1,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </HeroBg>
      <HeroContent></HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
