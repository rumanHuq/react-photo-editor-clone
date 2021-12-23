import styled from "styled-components";
import type { StyledElement } from "@/@types";
import { names } from "./names";
import type { IconName } from "./names";

interface IconProps extends StyledElement<HTMLSpanElement> {
  name: IconName;
  big?: boolean;
}

const IconWrapper = styled.span<Pick<IconProps, "big">>`
  color: #fff;
  cursor: pointer;
  font-size: ${({ big }) => (big ? "1.25rem" : "1.125rem")};
`;

export const Icon = ({ name, big = true, className, ...domProps }: IconProps) => {
  const spanClassName = [names[name], className].filter(Boolean).join(" ");
  return <IconWrapper className={spanClassName} big={big} {...domProps} />;
};
