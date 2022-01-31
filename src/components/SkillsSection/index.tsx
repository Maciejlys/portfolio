import React from "react";
import {
  FadeInWhenVisible,
  OnHoverScaleWithTopMotion,
} from "../FramerAnimations/Motions";
import {
  SkillColumn1,
  SkillHeading,
  SkillSectionContainer,
  SkillSectionRow,
  SkillSectionWrapper,
  SkillTextWrapper,
  SkillTopLine,
} from "./SkillsElements";

const SkillsSection: React.FC = () => {
  return (
    <>
      <SkillSectionContainer id={"skills"}>
        <FadeInWhenVisible>
          <SkillSectionWrapper>
            <SkillSectionRow>
              <SkillColumn1>
                <OnHoverScaleWithTopMotion>
                  <SkillTextWrapper>
                    <SkillTopLine>skill</SkillTopLine>
                    <SkillHeading>headline</SkillHeading>
                  </SkillTextWrapper>
                </OnHoverScaleWithTopMotion>
              </SkillColumn1>
            </SkillSectionRow>
          </SkillSectionWrapper>
        </FadeInWhenVisible>
      </SkillSectionContainer>
    </>
  );
};

export default SkillsSection;
