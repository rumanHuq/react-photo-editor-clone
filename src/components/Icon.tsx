import styled from "styled-components";
import type { StyledElement } from "@/@types";
import { icons } from "@/constants";

type IconName = keyof typeof icons;

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
  const spanClassName = [icons[name], className].filter(Boolean).join(" ");
  return <IconWrapper className={spanClassName} variant={variant} {...domProps} />;
};
