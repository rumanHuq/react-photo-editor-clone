import { atom } from "jotai";

interface State {
  cursor: {
    x: number;
    y: number;
    isDragging: boolean;
  };
}

export const rootAtom = atom<State>({ cursor: { x: 100, y: 100, isDragging: false } });

export const coordAtom = atom((get) => get(rootAtom).cursor);
