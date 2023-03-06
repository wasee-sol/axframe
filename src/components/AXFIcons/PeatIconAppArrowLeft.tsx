import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function PeatIconAppArrowLeft(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9.59999 13.4L4.29999 8.00001L9.59999 2.60001L10.4 3.40001L5.69999 8.00001L10.4 12.6L9.59999 13.4Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}

export { PeatIconAppArrowLeft };
