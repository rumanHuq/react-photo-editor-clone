import styled from "styled-components";
import { Icon } from "./Icon";

const MenubarWrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.grey16};
`;
export const Menubar = () => {
  return (
    <MenubarWrapper>
      <Icon name="arrowRightCircle" variant="big" />
    </MenubarWrapper>
  );
};
