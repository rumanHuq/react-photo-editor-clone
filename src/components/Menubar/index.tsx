import styled from "styled-components";
import { AppSettings } from "./AppSettings";
import { MenuItems } from "./MenuItems";

const MenubarWrapper = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey16};
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 1fr auto 1fr;

  > {
    :nth-child(2) {
      align-self: center;
      justify-self: center;
    }

    :last-child {
      justify-self: self-end;
    }
  }
`;
export const Menubar = () => {
  return (
    <MenubarWrapper>
      <MenuItems />
      <p>Untitled*</p>
      <AppSettings />
    </MenubarWrapper>
  );
};
