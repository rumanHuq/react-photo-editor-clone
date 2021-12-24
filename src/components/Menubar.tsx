import styled from "styled-components";
import { Icon } from "./Icon";

const MenubarWrapper = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey16};
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 1fr auto 1fr;

  > {
    :nth-child(2) {
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
      <div>
        <Icon name="airplay" />
        <Icon name="airplay" />
        <Icon name="airplay" />
        <Icon name="airplay" />
        <Icon name="airplay" />
        <Icon name="airplay" />
        <Icon name="airplay" />
        <Icon name="airplay" />
        <Icon name="airplay" />
        <Icon name="airplay" />
        <Icon name="airplay" />
        <Icon name="airplay" />
        <Icon name="airplay" />
        <Icon name="airplay" />
        <Icon name="airplay" />
        <Icon name="airplay" />
        <Icon name="airplay" />
        <Icon name="airplay" />
      </div>
      <div>
        <Icon name="alertCircle" />
        <Icon name="alertCircle" />
        <Icon name="alertCircle" />
        <Icon name="alertCircle" />
        <Icon name="alertCircle" />
        <Icon name="alertCircle" />
      </div>
      <Icon name="alertTriangle" />
    </MenubarWrapper>
  );
};
