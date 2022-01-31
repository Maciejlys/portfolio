import React from "react";
import { importFromPublic } from "../../utils/publicImportUtil";
import {
  FadeInWhenVisible,
  OnHoverScaleWithTopMotion,
} from "../FramerAnimations/Motions";
import { Img, ImgWrapper } from "../Section/SectionElements";
import { SklillTabs } from "../SkillsTabs";
import {
  SkillColumn1,
  SkillColumn2,
  SkillHeading,
  SkillSectionContainer,
  SkillSectionRow,
  SkillSectionWrapper,
  SkillSubtitle,
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
                  <SklillTabs />
                </OnHoverScaleWithTopMotion>
              </SkillColumn1>
              <SkillColumn2>
                <OnHoverScaleWithTopMotion>
                  <ImgWrapper>
                    <Img
                      src={importFromPublic("assets/svg/skills.svg")}
                      alt="skills"
                    />
                  </ImgWrapper>
                </OnHoverScaleWithTopMotion>
              </SkillColumn2>
            </SkillSectionRow>
          </SkillSectionWrapper>
        </FadeInWhenVisible>
      </SkillSectionContainer>
    </>
  );
};

export default SkillsSection;
