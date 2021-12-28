import styled from "styled-components";

const LayerbarWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.grey19};
  width: 33.2rem;
`;

export const Layerbar = () => {
  return <LayerbarWrapper>Layer</LayerbarWrapper>;
};
