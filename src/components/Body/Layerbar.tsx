import { useAtom } from "jotai";
import styled from "styled-components";
import { buttonReset } from "@/utils/css";
import { readDrawingLayersAtom, writeActiveLayerAtom } from "./Canvas/state";

const LayerbarWrapper = styled.ul`
  background-color: ${({ theme }) => theme.colors.grey19};
  list-style: none;
  margin: 0;
  padding: 0;
  width: 33.2rem;

  button {
    ${buttonReset}
  }
`;

export const Layerbar = () => {
  const [layers] = useAtom(readDrawingLayersAtom);
  const [, setActiveLayer] = useAtom(writeActiveLayerAtom);
  return (
    <LayerbarWrapper>
      {layers.map((layer, idx) => (
        <li key={idx}>
          <button type="button" onClick={() => setActiveLayer({ idx })}>
            {layer.isImage() ? layer.getImage().alt : layer.getCanvas().name}
          </button>
        </li>
      ))}
    </LayerbarWrapper>
  );
};
