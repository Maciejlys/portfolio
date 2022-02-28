import React from "react";
import {
  CloseIcon,
  Icon,
  Menu,
  MobileBarContainer,
  Wrapper,
  MobileLink,
} from "./MobileBarElements";
import { navigationLinks } from "../../constants/nav-links";
import { NavProps } from "../../pages/Home";

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
              <MobileLink
                key={index}
                to={link.link}
                onClick={toggleMenu}
                smooth={true}
                duration={500}>
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
