import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function PeatIconExample(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M1 0V16H15V0H1ZM14 15H2V12H4V11H2V10H4V9H2V8H4V7H2V6H4V5H2V1H14V15Z' fill='black' />
        <path d='M13 2H3V4H13V2Z' fill='black' />
        <path
          d='M12.6 10.4C12.9 10.2 12.9 9.8 12.6 9.6C11.9 9 10.6 8 9 8C7.4 8 6.1 9 5.4 9.6C5.1 9.8 5.1 10.2 5.4 10.4C6.1 11 7.4 12 9 12C10.6 12 11.9 11 12.6 10.4ZM8 10C8 9.4 8.4 9 9 9C9.6 9 10 9.4 10 10C10 10.6 9.6 11 9 11C8.4 11 8 10.6 8 10Z'
          fill='black'
        />
        <path d='M5 5V8H6V6H12V8H13V5H5Z' fill='black' />
        <path d='M12 13H6V12H5V14H13V12H12V13Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { PeatIconExample };
