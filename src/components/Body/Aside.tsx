import styled from "styled-components";
import { buttonReset } from "@/utils/css";
import { Icon } from "../Icon";
import { SVG } from "../SVG";

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
      background-color: ${({ theme }) => theme.colors.grey23};
    }
  }
`;

const SVGIcon = styled(SVG).attrs(() => ({ color: "#fff", width: 20 }))``;

export const AsideLeft = () => {
  return (
    <AsideWrapper>
      <button className="svg-wrapper" type="button">
        <SVGIcon name="SelectionToolIcon" />
      </button>
      <button className="svg-wrapper" type="button">
        <SVGIcon name="DirectSelectionToolIcon" />
      </button>
      <button className="svg-wrapper" type="button">
        <SVGIcon name="PenIcon" />
      </button>
      <button className="svg-wrapper" type="button">
        <SVGIcon name="DrawIcon" />
      </button>
      <button className="svg-wrapper" type="button">
        <SVGIcon name="CreateRectangleIcon" />
      </button>
      <button className="svg-wrapper" type="button">
        <SVGIcon name="CropIcon" />
      </button>
      <button className="svg-wrapper" type="button">
        <Icon name="file" />
      </button>
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
