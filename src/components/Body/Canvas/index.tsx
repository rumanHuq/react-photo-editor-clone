// https://codepen.io/Ponomarev/pen/yLLXNLN
import { useAtom } from "jotai";
import type { KonvaEventObject } from "konva/lib/Node";
import { RefObject, useEffect, useRef, useState } from "react";
import { Layer, Stage } from "react-konva";
import { useWindowSize } from "react-use";
import type { StyledElement } from "@/@types";
import { KonvaImage } from "@/components/Body/Canvas/KonvaComponents/Image";
import { FileExporter } from "./FileExporter";
import { FileUploader } from "./FileUploader/FileUploader";
import { writeActiveLayerAtom, readDrawingLayersAtom, writeCursorCoordAtom, readActiveLayerAtom } from "./state";

const useCanvasDimension = (domref: RefObject<HTMLDivElement>) => {
  const [dimension, setDimension] = useState({ width: -1, height: -1 });
  const windowSize = useWindowSize();
  useEffect(() => {
    if (domref.current) {
      setDimension({ width: domref.current.offsetWidth - 10, height: domref.current.offsetHeight });
    }
  }, [domref, windowSize]);
  return dimension;
};

export const Canvas = (domProps: Partial<StyledElement<HTMLDivElement>>) => {
  const ref = useRef<HTMLDivElement>(null);
  const stageRef = useRef(null);
  const { height, width } = useCanvasDimension(ref);
  const [drawingLayers] = useAtom(readDrawingLayersAtom);
  const [, setActiveLayer] = useAtom(writeActiveLayerAtom);
  const [activeLayer] = useAtom(readActiveLayerAtom);
  const { index: activeLayerIndex } = activeLayer || {};
  const [, handleMouseMove] = useAtom(writeCursorCoordAtom);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleMouseMove({ x: e.clientX, y: e.clientY });
  };
  const onClickAway = (e: KonvaEventObject<MouseEvent> | KonvaEventObject<TouchEvent>) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setActiveLayer({ idx: undefined });
    }
  };

  return (
    <div {...{ ...domProps, onMouseMove, ref }}>
      <Stage {...{ ref: stageRef, height, width, onMouseDown: onClickAway, onTouchStart: onClickAway }}>
        {drawingLayers
          .map(
            (layer, key) =>
              layer.isImage() && (
                <Layer key={key}>
                  <KonvaImage
                    {...{
                      imageProps: layer.getImage(),
                      isSelected: key === activeLayerIndex,
                      onSelect: () => setActiveLayer({ idx: key }),
                      onChange: (image) => setActiveLayer({ idx: key, value: { image } }),
                    }}
                  />
                </Layer>
              )
          )
          .filter(Boolean)}
        <Layer />
      </Stage>
      <FileUploader />
      <FileExporter stageRef={stageRef} />
    </div>
  );
};
