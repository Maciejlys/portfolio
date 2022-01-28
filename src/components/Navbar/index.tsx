import React, { useEffect, useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { navigationLinks } from "../../nav-links";
import { NavProps } from "../../Pages/Home";
import { importFromPublic } from "../../utils/publicImportUtil";
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
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastPos, setLastPos] = useState(0);

  const handleScroll = () => {
    const currPos = window.scrollY;
    const isScrollingUp = currPos < lastPos;

    setScrollingDown(isScrollingUp);
    setLastPos(currPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastPos]);

  return (
    <>
      <Nav
        animate={{
          top: scrollingDown ? 0 : -200,
          opacity: scrollingDown ? 1 : 0,
        }}
        initial={{ top: 0, opacity: 1 }}
        transition={{ opacity: { duration: 0.5 }, top: { duration: 1 } }}>
        <NavContainer>
          <NavLogo src={importFromPublic("assets/logo.png")} />
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
