import styled from "styled-components";
import { buttonReset } from "@/utils/css";

export const DropdownWrapper = styled.li`
  align-items: center;
  display: flex;
  height: 100%;
  position: relative;
  z-index: 1;

  > button {
    ${buttonReset}
  }

  &:first-child ul {
    left: 0;
  }
`;

export const DropdownContent = styled.ul<{ open: boolean }>`
  background-color: ${({ theme }) => theme.colors.grey19};
  display: ${({ open }) => (open ? "inline-block" : "none")};
  left: -1.7rem;
  min-width: 10rem;
  position: absolute;
  top: 100%;

  li {
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey13};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.grey16};
    }

    > button {
      ${buttonReset}
      padding: 1rem 1.7rem;
      text-align: left;
      width: 100%;
    }
  }
`;
