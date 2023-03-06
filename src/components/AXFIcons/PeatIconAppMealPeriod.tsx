import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function PeatIconAppMealPeriod(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M1 0V16H15V0H1ZM14 15H2V1H14V15Z' fill='black' />
        <path
          d='M4 9C4 9.9 4.4 10.6 5 10.9V14H6V10.9C6.6 10.6 7 9.9 7 9C7 7.9 6.3 7 5.5 7C4.7 7 4 7.9 4 9Z'
          fill='black'
        />
        <path d='M10 7H9V14H10V7Z' fill='black' />
        <path d='M12 7H11V14H12V7Z' fill='black' />
        <path d='M13 5H6V6H13V5Z' fill='black' />
        <path d='M5 5H3V6H5V5Z' fill='black' />
        <path d='M13 2H6V4H13V2Z' fill='black' />
        <path d='M5 2H3V4H5V2Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { PeatIconAppMealPeriod };
