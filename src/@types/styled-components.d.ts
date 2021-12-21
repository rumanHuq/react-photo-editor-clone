import { CSSProp } from "styled-components";
import { AppTheme } from "../main.styled";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {
    css?: CSSProp | CSSObject;
  }
}
