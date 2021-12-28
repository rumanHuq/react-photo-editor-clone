/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { RefObject, useEffect, useRef, useState } from "react";
import { Layer, Stage, Text } from "react-konva";
import type { StyledElement } from "@/@types";

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

  const [textState, setTextState] = useState({ isDragging: true, x: 250, y: 250 });
  return (
    <div ref={ref} {...domProps}>
      <Stage {...{ height, width }}>
        <Layer>
          <Text
            text="Draggable Text"
            x={textState.x}
            y={textState.y}
            draggable
            fill={textState.isDragging ? "green" : "white"}
            onDragMove={(e) => {
              const x = e.target.x();
              const y = e.target.y();
              if (x <= 0 || y <= 0 || x >= width - 90 || y >= height - 15) {
                e.target.stopDrag();
                return;
              }
              setTextState({ x, y, isDragging: true });
            }}
            onDragEnd={() => {
              setTextState({ ...textState, isDragging: false });
            }}
          />
        </Layer>
      </Stage>
    </div>
  );
};
