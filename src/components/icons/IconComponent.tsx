import * as React from "react";
import styled from "@emotion/styled";

export interface IconProps {
  fontSize?: string | number;
  color?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

function IconComponent({ fontSize = "1em", color, style, children }: IconProps) {
  const width = typeof fontSize === "string" ? fontSize : fontSize + "px";
  const height = typeof fontSize === "string" ? fontSize : fontSize + "px";

  return (
    <Container width={width} height={height} color={color} style={style}>
      {children}
    </Container>
  );
}

const Container = styled.div<{ width: string; height: string; color?: string }>`
  display: inline-flex;
  svg {
    width: ${(p) => p.width};
    height: ${(p) => p.height};
  }
  [fill="black"] {
    fill: ${(p) => p.color ?? "currentColor"};
  }
`;

export { IconComponent };
