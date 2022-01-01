import { useAtom } from "jotai";
import { SVG } from "@/components/SVG";
import { Dropdown } from "../Dropdown";
import { UndoRedo } from "./UndoRedo";
import { writeMenuItemActionAtom } from "./state";
import type { MenuItemAction } from "./state";
import { MenuItemsWrapper, LogoWrapper, ChevronDown, TextMenusWrapper } from "./styles";

const FILE_HANDLER_ITEMS = [
  { label: "New", value: "new" },
  { label: "Save", value: "save" },
  { label: "Import file", value: "import_local" },
  { label: "Export", value: "export" },
  { label: "Quit", value: "quit" },
];

function onClickFileMenuItem(
  prop: Readonly<typeof FILE_HANDLER_ITEMS[number]["value"]>,
  cb: (update?: MenuItemAction | undefined) => void
) {
  switch (prop) {
    case "import_local": {
      cb("OPEN_LOCAL_FILE");
      break;
    }
    case "export": {
      cb("SAVE_FILE_LOCALLY");
      break;
    }
    default: {
      cb(undefined);
      break;
    }
  }
}

export const MenuItems = () => {
  const [, setMenuItem] = useAtom(writeMenuItemActionAtom);
  const genericItem = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
  ];
  return (
    <MenuItemsWrapper>
      <LogoWrapper type="button">
        <SVG width={32} name="ArtboardLogo" />
        <ChevronDown />
      </LogoWrapper>
      <TextMenusWrapper>
        <Dropdown
          label="File"
          items={FILE_HANDLER_ITEMS}
          onClickMenuItem={(val) => onClickFileMenuItem(val, setMenuItem)}
        />
        <Dropdown label="Edit" items={genericItem} onClickMenuItem={(val) => console.log(val)} />
        <Dropdown label="View" items={genericItem} onClickMenuItem={(val) => console.log(val)} />
        <Dropdown label="Window" items={genericItem} onClickMenuItem={(val) => console.log(val)} />
      </TextMenusWrapper>
      <UndoRedo />
    </MenuItemsWrapper>
  );
};
