import styled from "styled-components";

const StatusbarWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.grey19};
`;
export const Statusbar = () => {
  return <StatusbarWrapper />;
};
