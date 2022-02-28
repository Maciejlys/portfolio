import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectSectionsContainer = styled.div`
  min-height: 100vh;
  background-color: #0a192f;
`;

export const ProjectsTitleContainer = styled.div`
  height: 10%;
  padding: 5rem 0;
  text-align: center;
`;

export const ProjectsContainer = styled(motion.div)`
  padding: 2rem;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  gap: 2rem 2rem;
  justify-content: center;
`;

export const SectionTitle = styled.div`
  color: #64ffda;
  font-size: 26px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
