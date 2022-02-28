import { motion } from "framer-motion";
import styled from "styled-components";

export const CardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 350px;
  border-radius: 9px;
  background-color: #112240;
  padding: 2rem;
  &:hover {
    .title {
      color: #64ffda;
    }
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;

  .left {
    width: 70%;
  }
  .right {
    display: flex;
    gap: 1rem;
    margin-left: auto;
    margin-right: 0;
  }
`;

export const ProjectTitle = styled.div`
  font-size: 1.5rem;
  color: #fff;
  padding: 10px 0;
  font-weight: bold;
`;
export const ProjectDescription = styled.div`
  font-size: 1.2rem;
  color: #cecece;
  padding: 15px 0;
  height: 150px;
`;
export const Stack = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  width: 300px;
  flex-wrap: wrap;
  div {
    color: #cecece;
  }
`;
