import styled from "styled-components";

export const SkillSectionContainer = styled.div`
  color: #fff;
  background-color: "#0a192f";
  font-weight: bold;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }

  a {
    text-decoration: none;
  }
`;

export const SkillSectionWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: center;
`;

export const SkillSectionRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1";
`;

export const SkillColumn1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const SkillTextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const SkillTopLine = styled.div`
  color: #64ffda;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const SkillHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  color: "#f7f8fa";

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SkillSubtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: "#f7f8fa";
`;
