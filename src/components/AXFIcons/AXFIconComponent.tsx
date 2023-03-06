import * as React from "react";
import styled from "@emotion/styled";

export interface AXFIconProps {
  fontSize?: string | number;
  color?: string;
  secondColor?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

function AXFIconComponent({ fontSize = "1em", children, ...rest }: AXFIconProps) {
  const width = typeof fontSize === "string" ? fontSize : fontSize + "px";
  const height = typeof fontSize === "string" ? fontSize : fontSize + "px";

  return (
    <Container width={width} height={height} {...rest}>
      {children}
    </Container>
  );
}

const Container = styled.div<{ width: string; height: string; color?: string; secondColor?: string }>`
  display: inline-flex;
  svg {
    width: ${(p) => p.width};
    height: ${(p) => p.height};
  }
  [fill="black"] {
    fill: ${(p) => p.color ?? "currentColor"};
  }
  [fill="red"] {
    fill: ${(p) => p.secondColor ?? "currentColor"};
  }
`;

export { AXFIconComponent };
