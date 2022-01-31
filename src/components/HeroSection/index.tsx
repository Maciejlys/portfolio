import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { importFromPublic } from "../../utils/publicImportUtil";
import { OnHoverScaleWithTopMotion } from "../FramerAnimations/Motions";
import {
  easing,
  fadeInUp,
  animationContainer,
  fadeInRight,
} from "../FramerAnimations/variants";
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
  const controls = useAnimation();
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

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
        <OnHoverScaleWithTopMotion>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 2 }}>
            <HeroSpan>Hi, my name is</HeroSpan>
          </motion.div>
        </OnHoverScaleWithTopMotion>
        <OnHoverScaleWithTopMotion>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 2.5 }}>
            <HeroH1>Maciej Łyszczarz.</HeroH1>
          </motion.div>
        </OnHoverScaleWithTopMotion>
        <OnHoverScaleWithTopMotion>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 3 }}>
            <HeroH2>I build things for the web.</HeroH2>
          </motion.div>
        </OnHoverScaleWithTopMotion>
        <OnHoverScaleWithTopMotion>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 3.5 }}>
            <HeroP>I'm a student that learns how to build websites.</HeroP>
          </motion.div>
        </OnHoverScaleWithTopMotion>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
