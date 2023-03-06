import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconUpDownTriangle(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M8 3L5 7H11L8 3Z' fill='black' />
        <path d='M8 13L11 9H5L8 13Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconUpDownTriangle };
