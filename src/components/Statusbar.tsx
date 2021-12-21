import styled from "styled-components";

const StatusbarWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.grey19};
  height: 30px;
`;
export const Statusbar = () => {
  return <StatusbarWrapper />;
};
