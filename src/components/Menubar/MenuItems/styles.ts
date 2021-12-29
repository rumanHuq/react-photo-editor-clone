import styled, { css } from "styled-components";
import { Icon } from "@/components/Icon";
import { ulReset, buttonReset } from "@/utils/css";

export const MenuItemsWrapper = styled.nav`
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

export const LogoWrapper = styled.button`
  ${buttonReset}
  align-items: center;
  background-color: ${({ theme }) => theme.colors.qtyellow};
  gap: 0.3rem;
  padding: 0 0.4rem;
  width: max-content;
`;

export const ChevronDown = styled(Icon).attrs(({ theme }) => ({ color: theme.colors.black, name: "chevronDown" }))`
  font-size: 1.8rem;
`;

function incrementByOneRightMargin() {
  let styles = css``;
  for (let i = 1; i <= 4; i += 1) {
    styles = styles.concat(css`
      > li:nth-child(${i}) {
        padding-right: ${24 + i}px;
      }
    `);
  }
  return styles;
}

export const TextMenusWrapper = styled.ul`
  align-items: center;
  display: flex;
  font-size: 1.3rem;

  > li:first-child {
    padding-left: 1.7rem;
  }

  > li > button {
    ${buttonReset}
  }
  ${incrementByOneRightMargin}
`;
