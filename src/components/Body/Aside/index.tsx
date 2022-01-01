import { useAtom } from "jotai";
import styled from "styled-components";
import { Icon } from "@/components/Icon";
import { SVG } from "@/components/SVG";
import type { IconName as SVGIconName } from "@/components/SVG";
import { buttonReset } from "@/utils/css";
import { readWriteDrawingModeAtom } from "./state";
import type { DRAWING_MODE } from "./state";

const AsideWrapper = styled.aside`
  background-color: ${({ theme }) => theme.colors.grey16};
  width: 3.8rem;

  .svg-wrapper {
    ${buttonReset}

    align-items: center;
    display: flex;
    height: 3.4rem;
    justify-content: center;
    width: 3.8rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.grey42};
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.grey23};
    }
  }
`;

const SVGIcon = styled(SVG).attrs(() => ({ color: "#fff", width: 20 }))``;
export const AsideLeft = () => {
  const [drawingMode, setDrawingMode] = useAtom(readWriteDrawingModeAtom);
  const icons: { [key in DRAWING_MODE]: string } = {
    ADD: "SelectionToolIcon",
    MOVE: "DirectSelectionToolIcon",
    DRAW: "PenIcon",
    RESIZE: "DrawIcon",
    DRAW_RECT: "CreateRectangleIcon",
    CROP: "CropIcon",
    SELECT_FREE_RANGE: "file",
  };
  return (
    <AsideWrapper>
      {Object.entries(icons).map((entry, idx) => {
        const [modeKey, modeValue] = entry as [DRAWING_MODE, SVGIconName];
        const className = ["svg-wrapper", modeKey === drawingMode ? "active" : ""].filter(Boolean).join(" ");
        if (modeKey === "SELECT_FREE_RANGE") {
          return (
            <button className={className} type="button" key={idx} onClick={() => setDrawingMode("SELECT_FREE_RANGE")}>
              <Icon name="file" />
            </button>
          );
        }
        return (
          <button className={className} type="button" key={idx} onClick={() => setDrawingMode(modeKey)}>
            <SVGIcon name={modeValue} />
          </button>
        );
      })}
    </AsideWrapper>
  );
};

export const AsideRight = () => {
  return (
    <AsideWrapper>
      <button className="svg-wrapper" type="button">
        <Icon name="layers" />
      </button>
      <button className="svg-wrapper" type="button">
        <Icon name="gitPullRequest" />
      </button>
      <button className="svg-wrapper" type="button">
        <Icon name="messageSquare" />
      </button>
      <button className="svg-wrapper" type="button">
        <Icon name="share2" />
      </button>
    </AsideWrapper>
  );
};
