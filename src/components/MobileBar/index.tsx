import React from "react";
import {
  CloseIcon,
  Icon,
  Menu,
  MobileBarContainer,
  Wrapper,
  MobileLink,
} from "./MobileBarElements";
import { navigationLinks } from "../../nav-links";
import { NavProps } from "../../pages/Home";
import { OnHoverScaleMotion } from "../FramerAnimations/Motions";

const MobileBar: React.FC<NavProps> = ({ toggleMenu, isOpen }) => {
  return (
    <>
      <MobileBarContainer isOpen={isOpen} onClick={toggleMenu}>
        <Icon onClick={toggleMenu}>
          <CloseIcon />
        </Icon>
        <Wrapper>
          <Menu>
            {navigationLinks.map((link, index) => (
              <OnHoverScaleMotion key={index}>
                <MobileLink
                  to={link.link}
                  onClick={toggleMenu}
                  smooth={true}
                  duration={500}>
                  {link.title}
                </MobileLink>
              </OnHoverScaleMotion>
            ))}
          </Menu>
        </Wrapper>
      </MobileBarContainer>
    </>
  );
};

export default MobileBar;
