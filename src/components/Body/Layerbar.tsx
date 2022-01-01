import { useAtom } from "jotai";
import { useState } from "react";
import styled from "styled-components";
import { buttonReset } from "@/utils/css";
import { Icon } from "../Icon";
import { readDrawingLayersAtom, writeActiveLayerAtom } from "./Canvas/state";

const LayerbarWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.grey19};
  transition: width 100ms ease-in;
  width: 33.2rem;

  &.minimized {
    width: 10rem;
  }

  button {
    ${buttonReset}
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const LayoutSettings = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey23};
  display: flex;
  height: 2.4rem;
  justify-content: space-between;
  margin-bottom: 0.7rem;
  padding: 0 0.9rem 0 0.3rem;

  .resizer {
    width: 100%;
  }
`;

export const Layerbar = () => {
  const [layers] = useAtom(readDrawingLayersAtom);
  const [, setActiveLayer] = useAtom(writeActiveLayerAtom);
  const [minimized, setMinimized] = useState(false);
  return (
    <LayerbarWrapper {...(minimized ? { className: "minimized" } : {})}>
      <LayoutSettings>
        <button type="button" onClick={() => setMinimized(!minimized)}>
          <Icon name={minimized ? "chevronsLeft" : "chevronsRight"} />
        </button>
        <button type="button">
          <Icon name="moreHorizontal" />
        </button>
      </LayoutSettings>
      <ul>
        {layers.map((layer, idx) => (
          <li key={idx}>
            <button type="button" onClick={() => setActiveLayer({ idx })}>
              {layer.isImage() ? layer.getImage().alt : layer.getCanvas().name}
            </button>
          </li>
        ))}
      </ul>
    </LayerbarWrapper>
  );
};
