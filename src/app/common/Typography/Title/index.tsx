import { TitleComponent } from "./Title.styles";
import { TypographyProps } from "../types";

export function Title({ children, className, color }: TypographyProps) {
  return (
    <TitleComponent
      className={className}
      style={color ? { color } : undefined}
    >
      {children}
    </TitleComponent>
  );
}
