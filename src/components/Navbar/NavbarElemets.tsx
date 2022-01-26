import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(10, 25, 47, 0.85);
  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
  @media (max-width: 960px) {
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  background-color: rgba(1, 1, 1, 0.1);
`;

export const NavLogo = styled.div`
  background: transparent;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 2rem;
    cursor: pointer;
    color: white;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  background-color: transparent;
`;

export const NavLinks = styled(Link)`
  background-color: transparent;
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  :hover {
    color: #64ffda;
  }
  &.active {
    border-bottom: 3px solid #64ffda;
  }
`;
