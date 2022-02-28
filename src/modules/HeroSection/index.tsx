import React from "react";
import {
  AnimateIconDown,
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroIcon,
  HeroIconContainer,
  HeroLetter,
  HeroLine,
  MainContent,
} from "./HeroElements";
import { HeroParticles } from "../../components/HeroParticles";
import {
  container,
  heroArrow,
  listItem,
} from "../../components/FramerAnimations/variants";
import { Link } from "react-scroll";

const lines = [
  "Hi,",
  "My name is Maciej.",
  "I am learning how,",
  "to build web apps.",
];

export const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <HeroParticles />
      </HeroBg>
      <HeroContent variants={container} initial="hidden" animate="show">
        <MainContent>
          {lines.map((line, index) => (
            <HeroLine key={index}>
              {line.split(" ").map((word) => (
                <>
                  {word.split("").map((letter, index) => (
                    <HeroLetter
                      key={index}
                      variants={listItem}
                      whileHover={{
                        scale: [1, 1.2, 1.1, 1.2],
                        rotate: [0, 5, -5, 0],
                        color: ["#fff", "#64ffda"],
                        transition: {
                          duration: 0.2,
                        },
                      }}>
                      {letter}
                    </HeroLetter>
                  ))}
                  &nbsp;
                </>
              ))}
            </HeroLine>
          ))}
        </MainContent>
        <HeroIconContainer variants={heroArrow}>
          <Link to="about" smooth={true} spy={true} duration={500}>
            <AnimateIconDown
              animate={{ y: [0, 30, 0] }}
              transition={{ repeat: Infinity, delay: 8 }}>
              <HeroIcon />
            </AnimateIconDown>
          </Link>
        </HeroIconContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
