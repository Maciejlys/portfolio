import React, { useEffect, useState } from "react";
import { skills } from "../../Data/skillsData";
import { FaAngleDoubleRight } from "react-icons/fa";
import {
  Description,
  RightArrowIcon,
  SkillButton,
  SkillButtonWrapper,
  SkillContainer,
  SkillH3,
  SkillInfo,
  SkillP,
  SkillWrapper,
} from "./SkillTabsElements";
import { OnHoverScaleWithTopMotionClickable } from "../FramerAnimations/Motions";
import { fadeInFromBottom } from "../FramerAnimations/variants";
import { SkillProps } from "../../Data/skillPropsType";

interface SklillTabsProps {}

export const SklillTabs: React.FC<SklillTabsProps> = () => {
  const [allSkills, setSkills] = useState<SkillProps[]>(skills);
  const [value, setValue] = useState(0);
  const [skill, setSkill] = useState(skills[0]);
  const [anim, setAnim] = useState(false);
  const { description, title } = skill;

  useEffect(() => {
    const sortedSkills = skills.sort((a, b) => a.order - b.order);
    setSkills(sortedSkills);
  }, []);

  useEffect(() => {
    setAnim(false);
    setTimeout(() => {
      setSkill(allSkills[value]);
      setAnim(true);
    }, 500);
  }, [value]);

  return (
    <>
      <SkillContainer>
        <SkillWrapper>
          <SkillButtonWrapper>
            {allSkills.map((item, index) => (
              <OnHoverScaleWithTopMotionClickable key={index}>
                <SkillButton
                  onClick={() => setValue(index)}
                  active={index === value}>
                  {item.title}
                </SkillButton>
              </OnHoverScaleWithTopMotionClickable>
            ))}
          </SkillButtonWrapper>
          <SkillInfo
            variants={fadeInFromBottom}
            initial="initial"
            animate={anim ? "animate" : "initial"}>
            <SkillH3>{title}</SkillH3>
            {description.map((line, index) => (
              <Description key={index}>
                <RightArrowIcon />
                <SkillP>
                  <p>{line}</p>
                </SkillP>
              </Description>
            ))}
          </SkillInfo>
        </SkillWrapper>
      </SkillContainer>
    </>
  );
};

export default SklillTabs;
