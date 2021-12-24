import styled from "styled-components";
import { Icon } from "@/components/Icon";
import SVG from "../../SVG";

const MenuItemsWrapper = styled.div`
  height: 100%;

  > * {
    height: inherit;
  }
`;

const LogoDropdownWrapper = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.qtyellow};
  border: 0;
  display: flex;
  gap: 0.3rem;
  padding: 0 0.4rem;
  width: max-content;
`;

const ChevronDown = styled(Icon).attrs(({ theme }) => ({ color: theme.colors.black, name: "chevronDown" }))`
  font-size: 1.8rem;
`;

export const MenuItems = () => {
  return (
    <MenuItemsWrapper>
      <LogoDropdownWrapper type="button">
        <SVG width={32} name="ArtboardLogo" />
        <ChevronDown />
      </LogoDropdownWrapper>
    </MenuItemsWrapper>
  );
};
