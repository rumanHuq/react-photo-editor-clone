import { atom } from "jotai";
import type { NodeConfig } from "konva/lib/Node";
import { writeDrawingLayersAtom } from "@/components/Body/Canvas/state";

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
