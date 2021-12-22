import styled from "styled-components";
import { Menubar } from "./Menubar";
import { Statusbar } from "./Statusbar";

/**
 * Custom cursor: https://javascript.plainenglish.io/how-to-create-a-custom-css-pointer-in-react-2d4684215564
 */

const AppWrapper = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 42px 1fr 30px;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`;

export const App = () => (
  <AppWrapper>
    <Menubar />
    <main />
    <Statusbar />
  </AppWrapper>
);
