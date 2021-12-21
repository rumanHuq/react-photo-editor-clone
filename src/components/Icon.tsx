import type { StyledElement } from "@/@types";
import { icons } from "@/constants";

type IconName = keyof typeof icons;

interface IconProps extends StyledElement<HTMLSpanElement> {
  name: IconName;
}

export const Icon = ({ name, className, ...domProps }: IconProps) => {
  const spanClassName = [icons[name], className].filter(Boolean).join(" ");
  return <span className={spanClassName} {...domProps} />;
};
