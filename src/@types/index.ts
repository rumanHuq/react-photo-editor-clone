export type StyledElement<T extends Element = HTMLDivElement> = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<T>, T>,
  "ref"
>;
