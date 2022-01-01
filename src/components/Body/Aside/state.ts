import { atom } from "jotai";

export type DRAWING_MODE = "MOVE" | "SELECT_FREE_RANGE" | "DRAW" | "CROP" | "SELECT_RECT" | "RESIZE" | "ADD";

const drawingModeAtom = atom<DRAWING_MODE>("RESIZE");
export const readDrawingModeAtom = atom((get) => get(drawingModeAtom));
export const writeDrawingModeAtom = atom(null, (_get, set, update: DRAWING_MODE) => {
  set(drawingModeAtom, update);
});
export const readWriteDrawingModeAtom = atom(
  (get) => get(drawingModeAtom),
  (_get, set, update: DRAWING_MODE) => {
    set(drawingModeAtom, update);
  }
);
