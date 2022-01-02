import { useAtom } from "jotai";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { readDrawingLayersAtom, readActiveLayerAtom, writeActiveLayerAtom } from "../Canvas/state";
import { LayerbarWrapper, LayoutSettings, LayerItem, LayerIcon } from "./style";

export const Layerbar = () => {
  const [layers] = useAtom(readDrawingLayersAtom);
  const [, setActiveLayer] = useAtom(writeActiveLayerAtom);
  const [activeLayer] = useAtom(readActiveLayerAtom);
  const [minimized, setMinimized] = useState(false);
  const layerName = (layer: typeof layers[number]) => {
    let title = "";
    if (layer.isImage()) {
      title = layer.getImage().name || "";
    } else if (layer.isCanvas()) {
      title = layer.getCanvas().name;
    }
    if (minimized) title = title.slice(0, 3);
    return title;
  };
  return (
    <LayerbarWrapper {...(minimized ? { className: "minimized" } : {})}>
      <LayoutSettings>
        <button type="button" onClick={() => setMinimized(!minimized)}>
          <Icon name={minimized ? "chevronsLeft" : "chevronsRight"} />
        </button>
        <button type="button">
          <Icon name="moreHorizontal" />
        </button>
      </LayoutSettings>
      <ul>
        {layers.map((layer, idx) => (
          <LayerItem key={idx} {...(activeLayer?.index === idx ? { className: "active" } : {})}>
            <button type="button" className="mr8">
              <LayerIcon name="chevronRight" />
            </button>
            <button type="button">
              <LayerIcon name="eye" />
            </button>
            <button onClick={() => setActiveLayer({ idx })} type="button" className="layer-name">
              {layerName(layer)}
            </button>
            <button type="button" className="mr8">
              <LayerIcon name={layer.isCanvas() ? "box" : "image"} />
            </button>
            <button type="button">
              <LayerIcon name="moreVertical" />
            </button>
          </LayerItem>
        ))}
      </ul>
    </LayerbarWrapper>
  );
};
