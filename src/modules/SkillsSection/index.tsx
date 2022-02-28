import React from "react";
import { FadeInWhenVisible } from "../../components/FramerAnimations/Motions";
import { SklillTabs } from "../../components/SkillsTabs";
import {
  SkillSectionBg,
  SkillSectionContainer,
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
