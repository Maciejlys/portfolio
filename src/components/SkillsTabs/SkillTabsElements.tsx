import { motion } from "framer-motion";
import { FaAngleDoubleRight } from "react-icons/fa";
import styled from "styled-components";

export const SkillContainer = styled.div`
  width: 80vw;
  height: 100%;
  margin: 0 auto;
  max-width: 1100px;

  p {
    max-width: 600px;
    line-height: 1rem;
    letter-spacing: 0.1rem;
    font-weight: 600;
  }
`;

export const SkillWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const SkillButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 2px solid white;
  text-align: center;

  @media (max-width: 960px) {
    flex-direction: row;
    border-bottom: 2px solid white;
    border-right: none;
    min-width: 300px;
    align-items: flex-end;
    height: 70px;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

interface SkillButtonProps {
  active: boolean;
}

export const SkillButton = styled(motion.div)<SkillButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 4rem;
  cursor: pointer;
  border-left: ${({ active }) =>
    active ? "3px solid #64ffda" : "3px solid transparent"};

  @media (max-width: 960px) {
    flex-direction: row;
    border-left: none;
    padding: 20px 0;
    border-top: ${({ active }) =>
      active ? "3px solid #64ffda" : "3px solid transparent"};
  }
`;
export const SkillInfo = styled(motion.div)`
  padding: 1rem;
  height: 50vh;
  width: 80%;
  word-break: break-word;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0 0.5rem;
  margin-top: 2rem;
`;

export const RightArrowIcon = styled(FaAngleDoubleRight)`
  min-width: 15px;
  display: flex;
  align-self: flex-start;
`;

export const TitleH3 = styled.h3``;

export const SkillTextButton = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  font-weight: 800;
  @media (max-width: 960px) {
    justify-content: center;
    align-items: flex-start;
    margin-bottom: auto;
    height: 3rem;
  }
`;
