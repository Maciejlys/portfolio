import React, { useState } from "react";
import { SkillProps, skills } from "../../Data/skillsData/skillsData";
import { FaAngleDoubleRight } from "react-icons/fa";
import {
  Description,
  SkillButton,
  SkillButtonWrapper,
  SkillContainer,
  SkillH2,
  SkillH3,
  SkillInfo,
  SkillP,
  SkillWrapper,
  Title,
} from "./SkillTabsElements";

interface SklillTabs {}

export const SklillTabs: React.FC<SklillTabs> = () => {
  const [allSkills, setSkills] = useState<SkillProps[]>(skills);
  const [value, setValue] = useState(0);
  const { dates, description, title } = skills[value];
  return (
    <>
      <SkillContainer>
        <Title>
          <SkillH2>My skills</SkillH2>
        </Title>
        <SkillWrapper>
          <SkillButtonWrapper>
            {skills.map((item, index) => (
              <SkillButton key={index} onClick={() => setValue(index)}>
                {item.title}
              </SkillButton>
            ))}
          </SkillButtonWrapper>
          <SkillInfo>
            <SkillH3>{title}</SkillH3>
            <SkillP>{dates}</SkillP>
            {description.map((line, index) => (
              <Description>
                <FaAngleDoubleRight></FaAngleDoubleRight>
                <SkillP>{line}</SkillP>
              </Description>
            ))}
          </SkillInfo>
        </SkillWrapper>
      </SkillContainer>
    </>
  );
};

export default SklillTabs;
