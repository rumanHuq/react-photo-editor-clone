import { atom } from "jotai";

export type MenuItemAction = "OPEN_LOCAL_FILE" | "SAVE_FILE_LOCALLY" | undefined;

const menuItemActionAtom = atom<MenuItemAction>(undefined);
export const readMenuItemActionAtom = atom((get) => get(menuItemActionAtom));
export const writeMenuItemActionAtom = atom(null, (_get, set, actionType: MenuItemAction) => {
  set(menuItemActionAtom, actionType);
});
export const readWriteMenuItemActionAtom = atom(
  (get) => get(menuItemActionAtom),
  (_get, set, actionType: MenuItemAction) => {
    set(menuItemActionAtom, actionType);
  }
);
