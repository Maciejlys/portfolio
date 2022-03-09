import styled from "styled-components";

interface SectionContainerProps {
  lightBg: boolean;
}

export const SectionContainer = styled.div<SectionContainerProps>`
  color: #fff;
  background-color: ${({ lightBg }) => (lightBg ? "#cecece" : "#0a192f")};
  font-weight: bold;
  min-height: 100vh;
  width: 100%;

  @media screen and (max-width: 960px) {
    padding: 80px 0;
  }

  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }

  a {
    text-decoration: none;
  }
`;

export const SectionWrapper = styled.div`
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 100%;
  }
  display: grid;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`;

interface SectionRowProps {
  imgStart: boolean;
}

export const SectionRow = styled.div<SectionRowProps>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin: 15px 0;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: #64ffda;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

interface HeadingProps {
  lightText: boolean;
}

export const Heading = styled.h1<HeadingProps>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

interface SubtitleProps {
  darkText: boolean;
}

export const Subtitle = styled.p<SubtitleProps>`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#f7f8fa")};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  height: 100%;
  @media screen and (max-width: 768px) {
    max-width: 450px;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    max-height: 300px;
  }
`;
