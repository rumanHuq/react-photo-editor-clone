import styled from "styled-components";
import type { StyledElement } from "@/@types";
import { names, IconName } from "./names";

interface IconProps extends StyledElement<HTMLSpanElement> {
  name: IconName;
  variant?: "small" | "big";
}

const IconWrapper = styled.span<Pick<IconProps, "variant">>`
  color: #fff;
  cursor: pointer;
  font-size: ${({ variant }) => (variant === "big" ? "1.25rem" : "1.125rem")};
`;

export const Icon = ({ name, variant = "small", className, ...domProps }: IconProps) => {
  const spanClassName = [names[name], className].filter(Boolean).join(" ");
  return <IconWrapper className={spanClassName} variant={variant} {...domProps} />;
};
