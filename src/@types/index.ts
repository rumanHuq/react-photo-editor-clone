export interface StyledElement<T extends Element = HTMLDivElement>
  extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<T>, T>, "ref"> {
  as?: string;
}
