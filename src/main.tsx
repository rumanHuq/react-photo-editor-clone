import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Menubar } from "./components/Menubar";
import { Statusbar } from "./components/Statusbar";
import { AppWrapper, GlobalStyles, theme } from "./main.styled";

import "./assets/style.css";

const App = () => (
  <AppWrapper>
    <Menubar />
    <main>{/*  */}</main>
    <Statusbar />
  </AppWrapper>
);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
