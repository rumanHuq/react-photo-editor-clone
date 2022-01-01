import { useAtom } from "jotai";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { readDrawingLayersAtom } from "@/components/Body/Canvas/state";
import { DropdownWrapper, DropdownContent } from "./styles";

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps<T extends DropdownItem> {
  label: string;
  items: T[];
  onClickMenuItem: (item: string) => void;
}

export function Dropdown<T extends DropdownItem>({ label, items, onClickMenuItem }: DropdownProps<T>) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  useClickAway(ref, () => {
    setOpen(false);
  });
  const [canvasItems] = useAtom(readDrawingLayersAtom);

  const onClick = (item: DropdownItem) => {
    onClickMenuItem(item.value);
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
              {item.label}
            </button>
          </li>
        ))}
      </DropdownContent>
    </DropdownWrapper>
  );
}
