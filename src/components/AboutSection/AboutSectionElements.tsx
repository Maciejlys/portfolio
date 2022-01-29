import styled from "styled-components";

export const AboutHeading = styled.div`
  h1 {
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const AboutP = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5em;
  p {
    color: #bbbbbb;
  }
`;
