import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function PeatIconMealTicket(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0 2V13H16V9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5V2H0ZM15 4.2C13.8 4.6 13 5.7 13 7C13 8.3 13.8 9.4 15 9.8V12H12V9H11V12H1V3H11V5H12V3H15V4.2Z'
          fill='black'
        />
        <path
          d='M3.5 4C2.7 4 2 4.9 2 6C2 6.9 2.4 7.6 3 7.9V11H4V7.9C4.6 7.6 5 6.9 5 6C5 4.9 4.3 4 3.5 4Z'
          fill='black'
        />
        <path d='M7 4H6V11H7V4Z' fill='black' />
        <path d='M9 4H8V11H9V4Z' fill='black' />
        <path d='M16 14H0V15H16V14Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { PeatIconMealTicket };
