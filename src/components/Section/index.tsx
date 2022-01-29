import React from "react";
import { SectionContainer, SectionWrapper } from "./SectionElements";

interface indexProps {
  id: string;
  color?: string;
}

export const Section: React.FC<indexProps> = ({ id, children, color }) => {
  return (
    <>
      <SectionContainer id={id} color={color}>
        <SectionWrapper>{children}</SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default Section;
