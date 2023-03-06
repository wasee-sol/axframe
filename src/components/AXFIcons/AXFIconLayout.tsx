import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconLayout(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M8 10H1V15H8V10Z' fill='black' />
        <path d='M15 1H8V6H15V1Z' fill='black' />
        <path d='M0 9H7V0H0V9ZM1 1H6V8H1V1Z' fill='black' />
        <path d='M9 16H16V7H9V16ZM10 8H15V15H10V8Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconLayout };
