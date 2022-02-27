import styled from "styled-components";

export const SkillSectionBg = styled.div`
  height: 100vh;
  background-color: #cecece;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: black;
  font-weight: 600;
`;

export const SkillSectionContainer = styled.div`
  color: #000;
  font-weight: bold;
  height: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6rem;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 480px) {
  }

  a {
    text-decoration: none;
  }
`;

export const SkillsSectionTitle = styled.div`
  justify-self: center;
`;
export const SkillsSectionH2 = styled.h2``;
