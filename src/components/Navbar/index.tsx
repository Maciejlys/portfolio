import React, { useEffect, useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { navigationLinks } from "../../nav-links";
import { NavProps } from "../../pages/Home";
import { importFromPublic } from "../../utils/publicImportUtil";
import { animateScroll } from "react-scroll";
import {
  MobileIcon,
  Nav,
  NavContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElemets";
import {
  OnHoverScaleMotion,
  OnHoverScaleWithTopMotionClickable,
} from "../FramerAnimations/Motions";

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

  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <Nav
        animate={{
          top: scrollingDown ? 0 : -200,
        }}
        initial={{ top: 0 }}
        transition={{ top: { duration: 0.5 } }}>
        <NavContainer>
          <NavLogo
            onClick={toggleHome}
            src={importFromPublic("assets/png/logo.png")}
          />
          <MobileIcon onClick={toggleMenu}>
            <OnHoverScaleMotion>
              <FaBars />
            </OnHoverScaleMotion>
          </MobileIcon>
          <NavMenu>
            {navigationLinks.map((link, index) => (
              <OnHoverScaleWithTopMotionClickable key={index}>
                <NavItem>
                  <NavLinks
                    to={link.link}
                    smooth={true}
                    spy={true}
                    duration={500}>
                    {link.title}
                  </NavLinks>
                </NavItem>
              </OnHoverScaleWithTopMotionClickable>
            ))}
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
