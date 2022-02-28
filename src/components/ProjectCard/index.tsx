import React from "react";
import { AiFillGithub, AiOutlineFolder, AiOutlineLink } from "react-icons/ai";
import { projectsType } from "../../sections-data/projectsData";
import {
  CardWrapper,
  ProjectDescription,
  ProjectTitle,
  Stack,
  TopBar,
} from "./ProjectCardElements";

export const ProjectCard: React.FC<projectsType> = ({
  title,
  description,
  stack,
  linkSource,
  linkDemo,
}) => {
  return (
    <CardWrapper whileHover={{ y: -10, transition: { duration: 0.2 } }}>
      <TopBar>
        <div className="left">
          <AiOutlineFolder fill="#64ffda" size="50" />
        </div>
        <div className="right">
          {linkDemo != "" && (
            <a href={linkDemo} target="_blank">
              <AiOutlineLink size="35" />
            </a>
          )}
          <a href={linkSource} target="_blank">
            <AiFillGithub size="35" />
          </a>
        </div>
      </TopBar>
      <ProjectTitle className="title">{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <Stack>
        {stack.map((s, index) => (
          <div key={index}>{s}</div>
        ))}
      </Stack>
    </CardWrapper>
  );
};
