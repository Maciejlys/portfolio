import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { navigationLinks } from "../../nav-links";
import { NavProps } from "../../Pages/Home";
import {
  MobileIcon,
  Nav,
  NavContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElemets";

export const Navbar: React.FC<NavProps> = ({ toggleMenu }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo>logo</NavLogo>
          <MobileIcon onClick={toggleMenu}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {navigationLinks.map((link) => (
              <NavItem>
                <NavLinks to={link.link}>{link.title}</NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
