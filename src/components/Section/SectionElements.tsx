import styled from "styled-components";

interface Prop {
  color?: string;
}

export const SectionContainer = styled.section<Prop>`
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }

  > * {
    background-color: ${(p) => p.color || "transparent"};
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 100vh;
  max-width: 1100px;
  margin: 0 auto 0 auto;
  padding: 0 24px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const SectionColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const AboutImg = styled.img`
  background: transparent;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;

  width: 500px;
`;
