import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${normalize()}

  *,*::before,*::after {
    box-sizing: border-box;
  }

  html {
    height: 100vh;
    min-height: 1024px;
    min-width: 768px;
    width: 100vw;
  }

  body {
    height: inherit;
    min-height: inherit;
    min-width: inherit;
    width: inherit;
  }

  a,button,select{
    cursor: pointer;
  }
`;

export const theme = {
  green: "#bada55",
};
export type AppTheme = typeof theme;
