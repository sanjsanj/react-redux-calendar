import styled, { createGlobalStyle } from "styled-components";

export const defaultTheme = {
  dayBackgroundLinearGradient:
    "linear-gradient(to bottom,#499bea 0%,#338ae7 100%)",
  disabledDayBackgroundColor: "#0c4b8f",
  dayColor: "#000",

  mainTitleColor: "#e0321f",
  mainTextColor: "#a7d1e2",

  buttonBackground: "teal",
  buttonColor: "#fff",

  boxShadowPassive: "0px 2px 9px #0000007a",
  boxShadowActive: "0px 3px 9px #000000",

  appBackgroundColor: "linear-gradient(to bottom,#292a49 0%,#2b548f 100%)",
  appColor: "#fff",

  modalUnderlayBackground: "#0000008a",

  maxWidth: "700px",
};

export const GlobalStyles = createGlobalStyle`
  html {
    background: ${props => props.theme.appBackgroundColor};
    font-family: Helvetica, Arial, sans-serif;
    color: ${props => props.theme.appColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    min-height: 100vh;
  }

  body {
    max-width: ${props => props.theme.maxWidth};
    margin: auto;
  }

  *, *:before, *:after {
    box-sizing: inherit;  
  }
`;

export const StyledAppTitle = styled.h1`
  color: ${props => props.theme.mainTitleColor};
  margin: 20px auto;

  img {
    margin-right: 10px;
    height: 24px;
  }
`;

export const StyledButton = styled.button`
  background: ${props => props.theme.buttonBackground};
  color: ${props => props.theme.buttonColor};
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  padding: 10px;
  border: 0;

  :hover {
    box-shadow: 0px 2px 9px #0000007e;
  }
`;

export const StyledSubmitInput = styled.input`
  background: ${props => props.theme.buttonBackground};
  color: ${props => props.theme.buttonColor};
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  padding: 10px;
  width: 150px;
  border: 0;

  :hover {
    box-shadow: 0px 2px 9px #0000007e;
  }
`;
