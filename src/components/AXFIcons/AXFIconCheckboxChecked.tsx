import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconCheckboxChecked(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V2C16 0.9 15.1 0 14 0ZM7 12L3 8L4 7L7 10L13 4L14 5L7 12Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconCheckboxChecked };
