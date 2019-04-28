import React from "react";
import { ThemeProvider } from "styled-components";

import {
  StyledAppTitle,
  defaultTheme,
  GlobalStyles,
  StyledButton,
} from "./styles";

import Calendar from "../Calendar";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />

        <StyledAppTitle>
          <img src={"favicon.ico"} alt={"Logo"} />
          Calendar Component
        </StyledAppTitle>

        <StyledButton>
          Add reminder{" "}
          <span role={"img"} aria-label="Reminder icon">
            ⏰
          </span>
        </StyledButton>

        <Calendar />
      </>
    </ThemeProvider>
  );
}
