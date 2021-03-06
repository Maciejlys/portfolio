import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

interface MobileBarContainerProps {
  isOpen?: boolean;
}

export const MobileBarContainer = styled.aside<MobileBarContainerProps>`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 25, 47, 95);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  font-weight: bold;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const Wrapper = styled.div`
  color: white;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 0;
  padding: 0;
`;

export const MobileLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: white;
  :hover {
    color: #64ffda;
    transition: 0.2s ease-in-out;
  }
  cursor: pointer;
`;
