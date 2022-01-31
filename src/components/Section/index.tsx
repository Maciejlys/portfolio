import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { importFromPublic } from "../../utils/publicImportUtil";
import {
  BtnWrapper,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrapper,
  SectionContainer,
  SectionRow,
  SectionWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./SectionElements";

interface SectionProps {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  topLine: string;
  headLine: string;
  description: string[];
  buttonLabel: string;
  imgStart: boolean;
  img: string;
  alt: string;
  dark: boolean;
  primary: boolean;
  dartText: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  lightBg,
  lightText,
  topLine,
  headLine,
  description,
  imgStart,
  img,
  alt,
  dartText,
}) => {
  return (
    <>
      <SectionContainer id={id} lightBg={lightBg}>
        <SectionWrapper>
          <SectionRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                {description.map((line) => (
                  <Subtitle darkText={dartText}>{line}</Subtitle>
                ))}
                <BtnWrapper>
                  <a href="https://github.com/Maciejlys" target="_blank">
                    <AiFillGithub size={50} />
                  </a>
                  <a href="https://github.com/Maciejlys" target="_blank">
                    <AiFillLinkedin size={50} />
                  </a>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={importFromPublic(img)} alt={alt} />
              </ImgWrapper>
            </Column2>
          </SectionRow>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default Section;
