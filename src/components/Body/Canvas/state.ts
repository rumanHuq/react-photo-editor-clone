import { atom } from "jotai";
import type { NodeConfig } from "konva/lib/Node";
import { cloneDeep } from "lodash";

interface CursorCoord {
  x: number;
  y: number;
}

interface Canvas {
  name: string;
  src: HTMLCanvasElement;
}

export interface ImageProps extends NodeConfig {
  src: string;
  alt: string;
}
type DrawingLayerType = { image: ImageProps } | { canvas: Canvas };

class DrawingLayer {
  private layer: DrawingLayerType;

  constructor(layer: DrawingLayerType) {
    let notValid = true;
    if (this.isCanvas(layer) === false) {
      notValid = false;
    } else if (this.isImage(layer) === false) {
      notValid = false;
    }
    if (notValid) throw new Error("Layer is not valid!");
    this.layer = layer;
  }

  isImage(layer?: DrawingLayerType): boolean {
    if (layer && "image" in layer) return true;
    if (this.layer && "image" in this.layer) return true;
    return false;
  }

  getImage() {
    // @ts-expect-error
    if (this.isImage() !== false) return this.layer.image as ImageProps;
    throw new Error("not valid image");
  }

  isCanvas(layer?: DrawingLayerType): boolean {
    if (layer && "canvas" in layer) return true;
    if (this.layer && "canvas" in this.layer) return true;
    return false;
  }

  getCanvas() {
    // @ts-expect-error
    if (this.isImage()) return this.layer.canvas as Canvas;
    throw new Error("not valid canvas");
  }
}

const activeLayerIndexAtom = atom<number | undefined>(undefined);
const drawingLayersAtom = atom<DrawingLayer[]>([]);
const cursorCoordAtom = atom<CursorCoord>({ x: 0, y: 0 });

export const readDrawingLayersAtom = atom((get) => get(drawingLayersAtom));
export const writeDrawingLayersAtom = atom(null, (_, set, update: DrawingLayerType) => {
  const layer = new DrawingLayer(update);
  set(drawingLayersAtom, (pre) => {
    const returnable = pre.concat(layer);
    set(activeLayerIndexAtom, returnable.length - 1);
    return returnable;
  });
});

export const readActiveLayerAtom = atom((get) => {
  const index = get(activeLayerIndexAtom);
  if (typeof index !== "number") return undefined;

  const activeLayerAtom = get(readDrawingLayersAtom)[index];
  return { index, activeLayerAtom };
});
export const writeActiveLayerAtom = atom(
  null,
  (_, set, { idx, value }: { idx?: number; value?: DrawingLayerType | DrawingLayer }) => {
    set(activeLayerIndexAtom, () => idx);
    if (value && typeof idx === "number") {
      set(drawingLayersAtom, (pre) => {
        const cloned = cloneDeep(pre);
        cloned[idx] = value instanceof DrawingLayer ? value : new DrawingLayer(value);
        return cloned;
      });
    }
  }
);

export const readCursorCoordAtom = atom((get) => get(cursorCoordAtom));
export const writeCursorCoordAtom = atom(null, (_, set, { x, y }: CursorCoord) =>
  set(cursorCoordAtom, () => ({ x, y }))
);

const imageProps: NodeConfig = {
  y: 100,
  x: 118,
  width: 1024,
  height: 640,
};

const toBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const fileAtom = atom(null, async (_get, set, file: File) => {
  const src = await toBase64(file);
  set(writeDrawingLayersAtom, { image: { ...imageProps, src, alt: file.name } });
});
