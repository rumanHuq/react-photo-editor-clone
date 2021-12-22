import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${normalize()}
  html {
    box-sizing: border-box
  }

  body {
    background-color: var(--grey13);
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  a,button,select{
    cursor: pointer;
  }
`;

export const theme = {
  colors: {
    grey13: "var(--grey13)",
    grey16: "var(--grey16)",
    grey19: "var(--grey19)",
    grey23: "var(--grey23)",
    grey42: "var(--grey42)",
    grey42b: "var(--grey42-53586b)",
    grey54: "var(--grey54)",
    grey95: "var(--grey95)",
    qtyellow: "var(--qtyellow)",
    qtgreen: "var(--qtgreen)",
    black: "var(--black)",
    grey25: "var(--grey25)",
    grey70: "var(--grey70)",
    grey84: "var(--grey84)",
    grey84b: "var(--grey84-2)",
    grey96: "var(--grey96)",
  },
};
export type AppTheme = typeof theme;
