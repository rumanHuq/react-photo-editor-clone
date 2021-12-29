/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// https://codepen.io/Ponomarev/pen/yLLXNLN
import { useAtom } from "jotai";
import { RefObject, useEffect, useRef, useState } from "react";
import { Layer, Stage, Text } from "react-konva";
import type { StyledElement } from "@/@types";
import { rootAtom } from "@/states";

const useCanvasDimension = (domref: RefObject<HTMLDivElement>) => {
  const [dimension, setDimension] = useState({ width: -1, height: -1 });

  useEffect(() => {
    if (domref.current) {
      setDimension({ width: domref.current.offsetWidth - 10, height: domref.current.offsetHeight });
    }
  }, [domref]);
  return dimension;
};

export const Canvas = (domProps: Partial<StyledElement<HTMLDivElement>>) => {
  const ref = useRef<HTMLDivElement>(null);
  const { height, width } = useCanvasDimension(ref);

  const [{ cursor }, setCursor] = useAtom(rootAtom);
  return (
    <div ref={ref} {...domProps}>
      <Stage {...{ height, width }}>
        <Layer>
          <Text
            text="Draggable Text"
            x={cursor.x}
            y={cursor.y}
            draggable
            fill={cursor.isDragging ? "green" : "white"}
            onDragMove={(e) => {
              const x = e.target.x();
              const y = e.target.y();
              if (x <= 0 || y <= 0 || x >= width - 90 || y >= height - 15) {
                e.target.stopDrag();
                return;
              }
              setCursor((prev) => ({ ...prev, cursor: { x, y, isDragging: true } }));
            }}
            onDragEnd={() => {
              setCursor((prev) => ({ ...prev, cursor: { ...prev.cursor, isDragging: true } }));
            }}
          />
        </Layer>
      </Stage>
    </div>
  );
};
