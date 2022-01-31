import styled from "styled-components";

export const SkillContainer = styled.div`
  h1,
  h2,
  h3,
  h4 {
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
`;
export const Title = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`;
export const SkillH2 = styled.h2``;
export const SkillWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
export const SkillButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 4rem;
  flex-wrap: wrap;
`;
export const SkillButton = styled.div`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.25rem;
  letter-spacing: 0.1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  padding: 0.5rem 0;
  line-height: 1;
  outline-color: hsl(186, 100%, 94%);
  :hover {
    color: #2caeba;
  }
`;
export const SkillInfo = styled.div``;
export const SkillH3 = styled.h3`
  font-weight: 400;
`;
export const SkillP = styled.p`
  letter-spacing: 0.1rem;
`;
export const Description = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
