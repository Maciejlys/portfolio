import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { importFromPublic } from "../../utils/publicImportUtil";
import {
  FadeInWhenVisible,
  OnHoverZoom,
  OnHoverZoomClickable,
} from "../../components/FramerAnimations/Motions";
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
import SectionProps from "./sectionInterface";

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
  buttonWrapper,
  darkText,
}) => {
  return (
    <SectionContainer id={id} lightBg={lightBg}>
      <FadeInWhenVisible>
        <SectionWrapper>
          <SectionRow imgStart={imgStart}>
            <Column1>
              <OnHoverZoom>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headLine}</Heading>
                  {description.map((line, index) => (
                    <Subtitle key={index} darkText={darkText}>
                      {line}
                    </Subtitle>
                  ))}
                  {buttonWrapper && (
                    <BtnWrapper>
                      <a
                        href="https://github.com/Maciejlys"
                        target="_blank"
                        rel="noreferrer">
                        <OnHoverZoomClickable>
                          <AiFillGithub size={50} />
                        </OnHoverZoomClickable>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/maciej-%C5%82yszczarz-258862213/"
                        target="_blank"
                        rel="noreferrer">
                        <OnHoverZoomClickable>
                          <AiFillLinkedin size={50} />
                        </OnHoverZoomClickable>
                      </a>
                    </BtnWrapper>
                  )}
                </TextWrapper>
              </OnHoverZoom>
            </Column1>
            <Column2>
              <OnHoverZoom>
                <ImgWrapper>
                  <Img src={importFromPublic(img)} alt={alt} />
                </ImgWrapper>
              </OnHoverZoom>
            </Column2>
          </SectionRow>
        </SectionWrapper>
      </FadeInWhenVisible>
    </SectionContainer>
  );
};

export default Section;
