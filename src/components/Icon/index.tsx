import identity from "lodash/identity";
import pickBy from "lodash/pickBy";
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

export const Icon = ({ name, big = true, className, ...props }: IconProps) => {
  const spanClassName = [names[name], className].filter(Boolean).join(" ");
  const domProps = pickBy(props, identity);

  /* `as` undefined is type error, but we will strip all the falsy value up */
  // @ts-expect-error
  return <IconWrapper className={spanClassName} big={big} {...domProps} />;
};
