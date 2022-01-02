import { CSSProp } from "styled-components";
import { AppTheme } from "@/components/App/style";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {
    css?: CSSProp | CSSObject;
  }
}
