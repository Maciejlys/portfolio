import { motion } from "framer-motion";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 95vh;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  font-weight: bold;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 25, 47, 1);
  overflow: hidden;
`;

export const HeroContent = styled(motion.div)`
  z-index: 3;
  max-width: 1200px;
  display: flex;
`;

export const HeroLine = styled(motion.div)`
  display: flex;
  letter-spacing: 0.2rem;
  font-weight: 600;
  font-size: 70px;
  background-color: rgba(10, 25, 47, 0.8);

  @media screen and (max-width: 960px) {
    font-size: 56px;
  }

  @media screen and (max-width: 780px) {
    font-size: 26px;
  }
`;

export const HeroIconContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 125px;
  left: 0;
  right: 0;
`;

export const HeroLetter = styled(motion.div)``;

export const MainContent = styled(motion.div)`
  margin-bottom: 10rem;
`;

export const AnimateIconDown = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeroIcon = styled(BsFillArrowDownCircleFill)`
  font-size: 6rem;

  &:hover {
    fill: #64ffda;
  }
`;
