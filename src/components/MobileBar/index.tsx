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
import { NavProps } from "../../Pages/Home";

const MobileBar: React.FC<NavProps> = ({ toggleMenu, isOpen }) => {
  return (
    <>
      <MobileBarContainer isOpen={isOpen} onClick={toggleMenu}>
        <Icon onClick={toggleMenu}>
          <CloseIcon />
        </Icon>
        <Wrapper>
          <Menu>
            {navigationLinks.map((link, i) => (
              <MobileLink key={i} to={link.link} onClick={toggleMenu}>
                {link.title}
              </MobileLink>
            ))}
          </Menu>
        </Wrapper>
      </MobileBarContainer>
    </>
  );
};

export default MobileBar;
