import "./assets/style.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Body } from "./components/Body";
import { Menubar } from "./components/Menubar";
import { Statusbar } from "./components/Statusbar";
import { AppWrapper, GlobalStyles, theme } from "./main.styled";

const App = () => {
  return (
    <AppWrapper>
      <Menubar />
      <Body />
      <Statusbar />
    </AppWrapper>
  );
};

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
