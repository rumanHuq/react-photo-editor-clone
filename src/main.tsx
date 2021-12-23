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
    <main>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>
        Heading 1 (Lato, bold, 22.46px) Body copy (Lato, 13px) File Edit Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
        enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
        consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie Heading 2 (Lato, bold,
        18.72px) Body copy (Lato, 13px) File Edit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
        iriure dolor in hendrerit in vulputate velit esse molestie Heading 3 (Lato, bold, 15.6px) Body copy (Lato, 13px)
        File Edit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
        suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
        vulputate velit esse molestie
      </p>
    </main>
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
