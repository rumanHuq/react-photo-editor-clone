/* eslint-disable @typescript-eslint/no-explicit-any */

import type { KonvaEventObject } from "konva/lib/Node";
import React from "react";
import { Transformer, Image } from "react-konva";
import type { ImageProps } from "../Body/Canvas/state";

export interface KonvaImageProps {
  isSelected: boolean;
  imageProps: ImageProps;
  onSelect: (e: KonvaEventObject<MouseEvent> | KonvaEventObject<Event>) => void;
  onChange: (imageProps: ImageProps) => void;
}

export const KonvaImage = ({ imageProps, isSelected, onSelect, onChange }: KonvaImageProps) => {
  const shapeRef = React.useRef<any>(null);
  const trRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  const { src, alt, ...otherImageProps } = imageProps;
  const image = new window.Image();
  image.src = src;
  image.alt = alt;
  return (
    <>
      <Image
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...otherImageProps}
        draggable
        image={image}
        onDragEnd={(e) => {
          onChange({
            ...otherImageProps,
            x: e.target.x(),
            y: e.target.y(),
            alt,
            src,
          });
        }}
        onTransformEnd={() => {
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
        }}
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
