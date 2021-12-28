import styled from "styled-components";

const LayerbarWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.grey19};
  width: 332px;
`;

export const Layerbar = () => {
  return <LayerbarWrapper>Layer</LayerbarWrapper>;
};
