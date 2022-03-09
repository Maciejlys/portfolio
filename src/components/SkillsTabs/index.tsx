import React, { useEffect, useState } from "react";
import { skills } from "../../sections-data/skillsData";
import {
  Description,
  RightArrowIcon,
  SkillButton,
  SkillButtonWrapper,
  SkillContainer,
  SkillInfo,
  SkillTextButton,
  SkillWrapper,
  TitleH3,
} from "./SkillTabsElements";
import { fadeInFromBottom } from "../FramerAnimations/variants";
import { SkillProps } from "../../sections-data/skillPropsType";

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
    <SkillContainer>
      <SkillWrapper>
        <SkillButtonWrapper>
          {allSkills.map((item, index) => (
            <SkillButton
              onClick={() => setValue(index)}
              active={index === value}
              key={index}>
              <SkillTextButton
                whileHover={{
                  scale: 1.1,
                  y: -5,
                }}
                whileTap={{ scale: 0.9, y: 5 }}>
                {item.title}
              </SkillTextButton>
            </SkillButton>
          ))}
        </SkillButtonWrapper>
        <SkillInfo
          variants={fadeInFromBottom}
          initial="initial"
          animate={anim ? "animate" : "initial"}>
          <TitleH3>{title}</TitleH3>
          {description.map((line, index) => (
            <Description key={index}>
              <RightArrowIcon />
              <p>{line}</p>
            </Description>
          ))}
        </SkillInfo>
      </SkillWrapper>
    </SkillContainer>
  );
};

export default SklillTabs;
