import styled from "styled-components";
import { AsideLeft, AsideRight } from "./Aside";
import { Canvas } from "./Canvas";
import { Layerbar } from "./Layerbar";

const BodyWrapper = styled.main`
  display: flex;

  .canvas {
    flex: 1;
  }
`;

export const Body = () => {
  return (
    <BodyWrapper>
      <AsideLeft />
      <Canvas className="canvas" />
      <Layerbar />
      <AsideRight />
    </BodyWrapper>
  );
};
