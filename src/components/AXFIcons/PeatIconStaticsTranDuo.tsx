import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function PeatIconStaticsTranDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M6 1H3V4H6V1Z' fill='red' />
        <path d='M10 1H7V4H10V1Z' fill='red' />
        <path
          d='M8 6C5.8 6 4 7.8 4 10C4 10.3 4.1 10.7 4.1 11H11.8C11.9 10.7 11.9 10.3 11.9 10C12 7.8 10.2 6 8 6Z'
          fill='red'
        />
        <path
          d='M8 5.5C5.5 5.5 3.5 7.5 3.5 10H3V11.2C3 12.8 4.5 14.3 6 15V16H10V15C11.5 14.3 13 12.8 13 11.2V10H12.5C12.5 7.5 10.5 5.5 8 5.5ZM6.2 7H7V6.7C7.3 6.6 7.7 6.5 8 6.5C9.2 6.5 10.2 7.1 10.9 8H10V9H11V8.2C11.3 8.7 11.5 9.3 11.5 10H9V9H8V10H5V9H4.7C4.9 8.2 5.5 7.4 6.2 7Z'
          fill='black'
        />
        <path d='M7 8H6V9H7V8Z' fill='black' />
        <path d='M9 7H8V8H9V7Z' fill='black' />
        <path d='M1 0V5H15V0H1ZM6 4H3V1H6V4ZM10 4H7V1H10V4ZM14 4H11V1H14V4Z' fill='black' />
        <path d='M5 2H4V3H5V2Z' fill='black' />
        <path d='M9 2H8V3H9V2Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { PeatIconStaticsTranDuo };
