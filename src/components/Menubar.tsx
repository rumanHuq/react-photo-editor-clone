import styled from "styled-components";

const MenubarWrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.grey16};
  height: 42px;
`;
export const Menubar = () => {
  return <MenubarWrapper />;
};
