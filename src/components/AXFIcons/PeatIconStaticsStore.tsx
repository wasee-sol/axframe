import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function PeatIconStaticsStore(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M15 2V0H1V2H0V16H16V2H15ZM2 1H14V2H2V1ZM1 15V8.7C1.3 8.9 1.6 9 2 9C2.6 9 3.1 8.7 3.5 8.3C3.9 8.7 4.4 9 5 9C5.6 9 6.1 8.7 6.5 8.3C6.9 8.7 7.4 9 8 9C8.6 9 9.1 8.7 9.5 8.3C9.9 8.7 10.4 9 11 9C11.6 9 12.1 8.7 12.5 8.3C12.9 8.7 13.4 9 14 9C14.4 9 14.7 8.9 15 8.7V15H1ZM1 7H3C3 7.6 2.6 8 2 8C1.4 8 1 7.6 1 7ZM4 7H6C6 7.6 5.6 8 5 8C4.4 8 4 7.6 4 7ZM7 7H9C9 7.6 8.6 8 8 8C7.4 8 7 7.6 7 7ZM10 7H12C12 7.6 11.6 8 11 8C10.4 8 10 7.6 10 7ZM14 8C13.4 8 13 7.6 13 7H15C15 7.6 14.6 8 14 8ZM1 6V3H15V6H1Z'
          fill='black'
        />
        <path d='M4 4H2V5H4V4Z' fill='black' />
        <path d='M6 4H5V5H6V4Z' fill='black' />
        <path d='M8 4H7V5H8V4Z' fill='black' />
        <path d='M10 4H9V5H10V4Z' fill='black' />
        <path d='M4 11H2V14H4V11Z' fill='black' />
        <path d='M7 10H5V14H7V10Z' fill='black' />
        <path d='M10 13H8V14H10V13Z' fill='black' />
        <path d='M13 11H11V14H13V11Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { PeatIconStaticsStore };
