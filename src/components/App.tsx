import styled from "styled-components";
import { Menubar } from "./Menubar";
import { Statusbar } from "./Statusbar";

const AppWrapper = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  overflow: hidden;
  width: 100vw;

  > main {
    background-color: ${({ theme }) => theme.colors.grey13};
  }
`;

export const App = () => (
  <AppWrapper>
    <Menubar />
    <main />
    <Statusbar />
  </AppWrapper>
);
