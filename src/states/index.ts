import { atom } from "jotai";

type Layer = { file: File } | { canvas: HTMLCanvasElement };

export interface AppState {
  cursor: {
    x: number;
    y: number;
  };
  layers: Layer[];
}

export const rootAtom = atom<AppState>({ cursor: { x: 100, y: 100 }, layers: [] });

export const cursorAtom = atom((get) => get(rootAtom).cursor);
export const layersAtom = atom((get) => get(rootAtom).layers);
