import { useAtom } from "jotai";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { readDrawingLayersAtom } from "@/components/Body/Canvas/state";
import { DropdownWrapper, DropdownContent } from "./styles";

interface DropdownProps<T> {
  label: string;
  items: Readonly<T[]>;
  onClickMenuItem: (item: T) => void;
}

export function Dropdown<T>({ label, items, onClickMenuItem }: DropdownProps<T>) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  useClickAway(ref, () => {
    setOpen(false);
  });
  const [canvasItems] = useAtom(readDrawingLayersAtom);

  const onClick = (item: T) => {
    onClickMenuItem(item);
    setOpen(false);
  };

  return (
    <DropdownWrapper ref={ref} zIndex={canvasItems.length + 1}>
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
