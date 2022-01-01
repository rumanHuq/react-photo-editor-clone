import { useAtom } from "jotai";
import type { KonvaEventObject } from "konva/lib/Node";
import React from "react";
import { Transformer, Image } from "react-konva";
import type { KonvaNodeEvents } from "react-konva";
import { readDrawingModeAtom } from "../Body/Aside/state";
import type { ImageProps } from "../Body/Canvas/state";

export interface KonvaImageProps {
  isSelected: boolean;
  imageProps: ImageProps;
  onSelect: (e: KonvaEventObject<MouseEvent> | KonvaEventObject<Event>) => void;
  onChange: (imageProps: ImageProps) => void;
}

export const KonvaImage = ({ imageProps, isSelected, onSelect, onChange }: KonvaImageProps) => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const shapeRef = React.useRef<any>(); /* Konva LegacyRef needs bit more studying for appropriate type assertion */
  const trRef = React.useRef<any>();
  /* eslint-enable @typescript-eslint/no-explicit-any */

  const [mode] = useAtom(readDrawingModeAtom);
  const { src, alt, ...otherImageProps } = imageProps;
  const image = new window.Image();
  image.src = src;
  image.alt = alt;

  const onDragEnd: KonvaNodeEvents["onDragEnd"] = (e) => {
    onChange({
      ...otherImageProps,
      x: e.target.x(),
      y: e.target.y(),
      alt,
      src,
    });
  };
  const onTransformEnd: KonvaNodeEvents["onTransformEnd"] = () => {
    const node = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    // we will reset it back
    node.scaleX(1);
    node.scaleY(1);
    onChange({
      ...otherImageProps,
      x: node.x(),
      y: node.y(),
      // set minimal value
      width: Math.max(5, node.width() * scaleX),
      height: Math.max(node.height() * scaleY),
      alt,
      src,
    });
  };

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected, mode]);

  return (
    <>
      <Image
        {...otherImageProps}
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        draggable={mode === "MOVE"}
        image={image}
        onDragEnd={onDragEnd}
        onTransformEnd={onTransformEnd}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};
