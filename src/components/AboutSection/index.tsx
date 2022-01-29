import React from "react";
import { importFromPublic } from "../../utils/publicImportUtil";
import Section from "../Section";
import { AboutImg, SectionColumn } from "../Section/SectionElements";
import { AboutHeading, AboutP } from "./AboutSectionElements";

interface indexProps {}

export const AboutSection: React.FC<indexProps> = () => {
  return (
    <Section id="about">
      <SectionColumn>
        <AboutHeading>
          <h1>About me</h1>
        </AboutHeading>
        <AboutP>
          <p>Hello! My name is Maciej Łyszczarz and I enjoy learning React.</p>
          <p>
            My intrest in web development started in 2021 when I was still
            looking
          </p>
          <p>for something programming related that will keep me envolved</p>
        </AboutP>
      </SectionColumn>
      <SectionColumn>
        <AboutHeading>
          <AboutImg src={importFromPublic("assets/logo.png")} />
        </AboutHeading>
      </SectionColumn>
    </Section>
  );
};

export default AboutSection;
