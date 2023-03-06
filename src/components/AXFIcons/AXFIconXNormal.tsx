import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconXNormal(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M13.4 3.40001L12.6 2.60001L7.99998 7.30001L3.39998 2.60001L2.59998 3.40001L7.29998 8.00001L2.59998 12.6L3.39998 13.4L7.99998 8.70001L12.6 13.4L13.4 12.6L8.69998 8.00001L13.4 3.40001Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconXNormal };
