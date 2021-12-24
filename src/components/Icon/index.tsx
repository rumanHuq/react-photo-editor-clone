import styled from "styled-components";
import type { StyledElement } from "@/@types";
import { names } from "./names";
import type { IconName } from "./names";

interface IconProps extends Omit<StyledElement<HTMLSpanElement>, "as"> {
  name: IconName;
  as?: string;
  variant?: "lg" | "md" | "sm";
}

function getFontSize({ variant }: Pick<IconProps, "variant">) {
  switch (variant) {
    case "md":
      return "1.25rem";
    case "sm":
      return "1.125rem";
    case "lg":
    default:
      return "1.8rem";
  }
}

const IconWrapper = styled.span<Pick<IconProps, "variant" | "color">>`
  color: ${({ color }) => color || "#fff"};
  cursor: pointer;
  font-size: ${getFontSize};
`;

export const Icon = ({ name, className, as, ...domProps }: IconProps) => {
  const iconProps = {
    ...domProps,
    as: as || "span",
    className: [names[name], className].filter(Boolean).join(" "),
  };
  // @ts-ignore
  return <IconWrapper {...iconProps} />;
};
