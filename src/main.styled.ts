import { normalize } from "polished";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${normalize()}

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;;
  }

  body {
    background-color: var(--grey13);
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5rem;
  }

  h1 {
    font-size: 2.246rem;
  }

  h2 {
    font-size: 1.872rem;
  }

  h3 {
    font-size: 1.56rem;
  }

  p {
    font-size: 1.3rem;
  }


  a,
  button,
  select {
    cursor: pointer;
  }
`;

/**
 * Custom cursor: https://javascript.plainenglish.io/how-to-create-a-custom-css-pointer-in-react-2d4684215564
 */

export const AppWrapper = styled.section`
  display: grid;
  gap: 0.1rem;
  grid-template-columns: auto;
  grid-template-rows: 4.2rem 1fr 3rem;
  height: 100vh;
  overflow: hidden;
  width: max(1134px, 100vw);
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
