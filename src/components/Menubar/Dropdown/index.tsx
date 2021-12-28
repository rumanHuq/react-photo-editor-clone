import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import styled from "styled-components";
import { buttonReset } from "@/utils/css";

const DropdownWrapper = styled.li`
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

const DropdownContent = styled.ul<{ open: boolean }>`
  background-color: ${({ theme }) => theme.colors.grey19};
  display: ${({ open }) => (open ? "inline-block" : "none")};
  left: -17px;
  min-width: 100px;
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

interface DropdownProps<T> {
  label: string;
  items: T[];
  onClickMenuItem: (item: T) => void;
}

export function Dropdown<T>({ label, items, onClickMenuItem }: DropdownProps<T>) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  useClickAway(ref, () => {
    setOpen(false);
  });

  const onClick = (item: T) => {
    onClickMenuItem(item);
    setOpen(false);
  };

  return (
    <DropdownWrapper ref={ref}>
      <button type="button" onClick={() => setOpen(true)}>
        {label}
      </button>
      <DropdownContent open={open}>
        {items.map((item, i) => (
          <li key={i}>
            <button type="button" onClick={() => onClick(item)}>
              {item}
            </button>
          </li>
        ))}
      </DropdownContent>
    </DropdownWrapper>
  );
}
