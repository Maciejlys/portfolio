import React from "react";
import { FadeInWhenVisible } from "../FramerAnimations/Motions";
import { TopLine } from "../Section/SectionElements";
import { SklillTabs } from "../SkillsTabs";
import {
  SkillSectionBg,
  SkillSectionContainer,
  SkillsSectionH2,
  SkillsSectionTitle,
} from "./SkillsElements";

const SkillsSection: React.FC = () => {
  return (
    <>
      <SkillSectionBg id={"skills"}>
        <FadeInWhenVisible>
          <SkillSectionContainer>
            <SkillsSectionTitle>
              <TopLine>My skills</TopLine>
            </SkillsSectionTitle>
            <SklillTabs />
          </SkillSectionContainer>
        </FadeInWhenVisible>
      </SkillSectionBg>
    </>
  );
};

export default SkillsSection;
