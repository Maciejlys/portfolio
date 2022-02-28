import { motion } from "framer-motion";
import React from "react";
import { projects } from "../../data/projectsData";
import {
  projectContainer,
  projectItem,
} from "../../components/FramerAnimations/variants";
import { ProjectCard } from "../../components/ProjectCard";
import {
  ProjectsContainer,
  ProjectSectionsContainer,
  ProjectsTitleContainer,
  SectionTitle,
} from "./ProjectSectionsElements";

interface indexProps {}

export const ProjectsSection: React.FC<indexProps> = () => {
  return (
    <ProjectSectionsContainer id="work">
      <ProjectsTitleContainer>
        <SectionTitle>Some of the things I've built</SectionTitle>
      </ProjectsTitleContainer>
      <ProjectsContainer
        variants={projectContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}>
        {projects.map((project, index) => (
          <motion.div variants={projectItem} key={index}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </ProjectsContainer>
    </ProjectSectionsContainer>
  );
};
