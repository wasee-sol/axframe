import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconCheckmarkDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M13 4.00001L14 5.00001L7.99998 11L6.99998 12L5.99998 11L2.99998 8.00001L3.99998 7.00001L6.99998 10L13 4.00001ZM13 2.60001L12.3 3.30001L6.99998 8.60001L4.69998 6.30001L3.99998 5.60001L3.29998 6.30001L2.29998 7.30001L1.59998 8.00001L2.29998 8.70001L5.29998 11.7L6.29998 12.7L6.99998 13.4L7.69998 12.7L8.69998 11.7L14.7 5.70001L15.4 5.00001L14.7 4.30001L13.7 3.30001L13 2.60001Z'
          fill='red'
          fillOpacity='0.3'
        />
        <path fillRule='evenodd' clipRule='evenodd' d='M7 10L4 7L3 8L7 12L14 5L13 4L7 10Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconCheckmarkDuo };
