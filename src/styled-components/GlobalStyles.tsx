import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-color: #0a192f; */
  color: #fafafa;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;

    @keyframes slideInFromLeft {
    0% {
      transform: translateX(-200%);
      opacity: 0;
    }
    60%{
      opacity: 0;
    }
    75%{
      transform: translateX(0);
    }
    100% {
      opacity: 1;
    }
  }

    @keyframes slideInFromRight {
    0% {
      transform: translateX(200%);
      opacity: 0;
    }
    60% {
      opacity: 0;
    }
    75% {
      transform: translateX(0);
    }
    100% {
      opacity: 1;
    }
  }
}
`;
