import { useAtom } from "jotai";
import styled from "styled-components";
import { rootAtom } from "@/states";

const LayerbarWrapper = styled.ul`
  background-color: ${({ theme }) => theme.colors.grey19};
  margin: 0;
  padding: 0;
  width: 33.2rem;
`;

export const Layerbar = () => {
  const [{ layers }, _setLayers] = useAtom(rootAtom);
  return (
    <LayerbarWrapper>
      {layers
        .map((layer, idx) => <li key={idx}>{JSON.stringify("file" in layer ? layer.file.name : "")}</li>)
        .reverse()}
    </LayerbarWrapper>
  );
};
