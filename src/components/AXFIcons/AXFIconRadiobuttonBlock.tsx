import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconRadiobuttonBlock(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12.6 4L4 12.6C5.1 13.5 6.5 14.1 8 14.1C11.4 14.1 14.1 11.4 14.1 8C14.1 6.5 13.6 5.1 12.6 4Z'
          fill='black'
        />
        <path d='M8 1.9C4.6 1.9 1.9 4.6 1.9 8C1.9 9.5 2.5 10.9 3.4 12L12 3.4C10.9 2.4 9.5 1.9 8 1.9Z' fill='black' />
        <path
          d='M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 15C4.1 15 1 11.9 1 8C1 4.1 4.1 1 8 1C11.9 1 15 4.1 15 8C15 11.9 11.9 15 8 15Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconRadiobuttonBlock };
