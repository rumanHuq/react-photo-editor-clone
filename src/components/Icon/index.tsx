import identity from "lodash/identity";
import pickBy from "lodash/pickBy";
import styled from "styled-components";
import type { StyledElement } from "@/@types";
import { names } from "./names";
import type { IconName } from "./names";

interface IconProps extends Omit<StyledElement<HTMLSpanElement>, "as"> {
  name: IconName;
  big?: boolean;
  as?: string;
}

const IconWrapper = styled.span<Pick<IconProps, "big">>`
  color: #fff;
  cursor: pointer;
  font-size: ${({ big }) => (big ? "1.25rem" : "1.125rem")};
`;

export const Icon = ({ name, big = true, className, as, ...domProps }: IconProps) => {
  const iconProps = {
    ...domProps,
    big,
    as: as || "span",
    className: [names[name], className].filter(Boolean).join(" "),
  };
  // @ts-ignore
  return <IconWrapper {...iconProps} />;
};
