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
    font-weight: 100;
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
  border-right: 1px solid lightgray;

  @media (max-width: 960px) {
    flex-direction: row-reverse;
    border-bottom: 1px solid lightgray;
    border-right: none;
    min-width: 300px;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

interface SkillButtonProps {
  active: boolean;
}

export const SkillButton = styled(motion.div)<SkillButtonProps>`
  padding: 1rem;

  cursor: pointer;
  border-left: ${({ active }) =>
    active ? "2px solid #64ffda" : "2px solid transparent"};
  @media (max-width: 960px) {
    flex-direction: row-reverse;
    border-left: none;
    border-top: ${({ active }) => (active ? "2px solid #64ffda" : "2px solid")};
  }
`;
export const SkillInfo = styled(motion.div)`
  padding: 1rem;
  height: 50vh;
  width: 80%;
  word-break: break-all;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const SkillH3 = styled(motion.h3)``;
export const SkillP = styled(motion.div)``;
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
