import { useRef } from "react";
import { SVG } from "@/components/SVG";
import { Dropdown } from "../Dropdown";
import { UndoRedo } from "./UndoRedo";
import { MenuItemsWrapper, LogoWrapper, ChevronDown, TextMenusWrapper } from "./styles";

const FILE_HANDLER_ITEMS = ["New", "Open", "Save", "Save as", "Quit"] as const;

type FileHandlerCallbacks = {
  [key in typeof FILE_HANDLER_ITEMS[number]]?: () => void;
};

function fileHandler(prop: typeof FILE_HANDLER_ITEMS[number], cb?: FileHandlerCallbacks) {
  switch (prop) {
    case "Open": {
      cb?.[prop]?.();
      break;
    }
    default: {
      console.log(prop);
      break;
    }
  }
}

export const MenuItems = () => {
  const fileUploadInputRef = useRef<HTMLInputElement>(null);
  const fileHandlerCallbacks: FileHandlerCallbacks = {
    Open: () => fileUploadInputRef.current?.click(),
  };
  return (
    <MenuItemsWrapper>
      <input ref={fileUploadInputRef} onChange={(v) => console.log(v)} type="file" style={{ display: "none" }} />
      <LogoWrapper type="button">
        <SVG width={32} name="ArtboardLogo" />
        <ChevronDown />
      </LogoWrapper>
      <TextMenusWrapper>
        <Dropdown
          label="File"
          items={FILE_HANDLER_ITEMS}
          onClickMenuItem={(val) => fileHandler(val, fileHandlerCallbacks)}
        />
        <Dropdown label="Edit" items={["1", "2", "3", "4"]} onClickMenuItem={(val) => console.log(val)} />
        <Dropdown label="View" items={["1", "2", "3", "4"]} onClickMenuItem={(val) => console.log(val)} />
        <Dropdown label="Window" items={["1", "2", "3", "4"]} onClickMenuItem={(val) => console.log(val)} />
      </TextMenusWrapper>
      <UndoRedo />
    </MenuItemsWrapper>
  );
};
