import React from "react";
import { FadeInWhenVisible } from "../../components/FramerAnimations/Motions";
import { TopLine } from "../Section/SectionElements";
import { SklillTabs } from "../../components/SkillsTabs";
import {
  SkillSectionBg,
  SkillSectionContainer,
  SkillsSectionH2,
  SkillsSectionTitle,
  Title,
} from "./SkillsElements";

const SkillsSection: React.FC = () => {
  return (
    <>
      <SkillSectionBg id={"skills"}>
        <FadeInWhenVisible>
          <SkillSectionContainer>
            <SkillsSectionTitle>
              <Title>My skills</Title>
            </SkillsSectionTitle>
            <SklillTabs />
          </SkillSectionContainer>
        </FadeInWhenVisible>
      </SkillSectionBg>
    </>
  );
};

export default SkillsSection;
