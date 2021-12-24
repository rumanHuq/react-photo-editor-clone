import styled, { css } from "styled-components";
import { Icon } from "@/components/Icon";
import { buttonReset, ulReset } from "@/utils/css";
import SVG from "../../SVG";
import { Dropdown } from "../Dropdown";

const MenuItemsWrapper = styled.nav`
  display: flex;
  height: 100%;

  > * {
    display: flex;
    height: inherit;
  }

  ul {
    ${ulReset}
  }
`;

const LogoWrapper = styled.button`
  ${buttonReset}
  align-items: center;
  background-color: ${({ theme }) => theme.colors.qtyellow};
  gap: 0.3rem;
  padding: 0 0.4rem;
  width: max-content;
`;

const ChevronDown = styled(Icon).attrs(({ theme }) => ({ color: theme.colors.black, name: "chevronDown" }))`
  font-size: 1.8rem;
`;

const incrementByOneRightMargin = () => {
  let styles = css``;
  for (let i = 1; i <= 4; i += 1) {
    styles = styles.concat(css`
      > li:nth-child(${i}) {
        padding-right: ${24 + i}px;
      }
    `);
  }
  return styles;
};

const TextMenusWrapper = styled.ul`
  align-items: center;
  display: flex;
  font-size: 1.3rem;

  > li:first-child {
    padding-left: 17px;
  }

  > li > button {
    ${buttonReset}
  }
  ${incrementByOneRightMargin}
`;

export const MenuItems = () => {
  return (
    <MenuItemsWrapper>
      <LogoWrapper type="button">
        <SVG width={32} name="ArtboardLogo" />
        <ChevronDown />
      </LogoWrapper>
      <TextMenusWrapper>
        <Dropdown label="File" items={["new", "open", "save", "save as"]} onClickMenuItem={(val) => console.log(val)} />
        <Dropdown label="Edit" items={["1", "2", "3", "4"]} onClickMenuItem={(val) => console.log(val)} />
        <Dropdown label="View" items={["1", "2", "3", "4"]} onClickMenuItem={(val) => console.log(val)} />
        <Dropdown
          label="Window"
          items={["1000000000000000000", "2", "3", "4"]}
          onClickMenuItem={(val) => console.log(val)}
        />
      </TextMenusWrapper>
    </MenuItemsWrapper>
  );
};
