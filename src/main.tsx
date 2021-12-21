import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { App } from "./components/App";
import { GlobalStyles, theme } from "./main.styled";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
