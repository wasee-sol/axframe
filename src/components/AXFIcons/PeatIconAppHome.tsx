import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function PeatIconAppHome(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M14.3 4.8L9.1 0.4C8.8 0.2 8.4 0 8 0C7.6 0 7.2 0.2 6.9 0.4L1.7 4.8C1.3 5.2 1 5.7 1 6.4V14C1 15.1 1.8 16 2.9 16H13.2C14.2 16 15.1 15.1 15.1 14V6.4C15 5.7 14.7 5.2 14.3 4.8ZM14 14C14 14.6 13.6 15 13.1 15H2.9C2.4 15 2 14.5 2 14V6.4C2 6 2.1 5.7 2.4 5.6L7.5 1.3C7.7 1.1 7.8 1 8 1C8.2 1 8.3 1.1 8.5 1.2L13.6 5.5C13.9 5.7 14 6 14 6.4V14Z'
          fill='black'
        />
        <path
          d='M5.5 6C4.7 6 4 6.9 4 8C4 8.9 4.4 9.6 5 9.9V13H6V9.9C6.6 9.6 7 8.9 7 8C7 6.9 6.3 6 5.5 6Z'
          fill='black'
        />
        <path d='M10 6H9V13H10V6Z' fill='black' />
        <path d='M12 6H11V13H12V6Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { PeatIconAppHome };
