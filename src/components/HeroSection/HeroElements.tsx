import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 91.3vh;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background-color: rgba(10, 25, 47, 0.99);
`;

export const HeroH1 = styled.h1`
  color: white;
  text-align: center;
  background-color: transparent;
  font-size: 72px;
  animation: 3s ease-in 0s slideInFromLeft;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`;

export const HeroH2 = styled.h2`
  color: #cacaca;
  background-color: transparent;
  font-size: 72px;
  animation: 4s ease-out 0s slideInFromRight;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`;

export const HeroSpan = styled.span`
  background-color: transparent;
  animation: 2s ease-in 0s slideInFromRight;
  color: #64ffda;
  font-size: 26px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const HeroP = styled.p`
  background-color: transparent;

  color: #cacaca;
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  animation: 5s ease-out 0s slideInFromLeft;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
