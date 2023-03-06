import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconBrandSketch(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M1 4L3 1.1H12.9L15 4L8 14L1 4Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconBrandSketch };
