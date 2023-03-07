import * as React from "react";
import { IconComponent, IconProps } from "./IconComponent";

interface Props {}

function PeatIconSale(props: IconProps) {
  return (
    <IconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M22 6H17V17H4V9H3V19H19V17H22V13.95C21.8384 13.9828 21.6712 14 21.5 14C20.1193 14 19 12.8807 19 11.5C19 10.1193 20.1193 9 21.5 9C21.6712 9 21.8384 9.01722 22 9.05001V6Z'
          fill='black'
          fillOpacity='0.3'
        />
        <path d='M17 9H16V10H17V9Z' fill='black' />
        <path d='M16 11H17V12H16V11Z' fill='black' />
        <path d='M17 13H16V14H17V13Z' fill='black' />
        <path d='M7 10C7 8.89543 7.89543 8 9 8H12C13.1046 8 14 8.89543 14 10H7Z' fill='black' />
        <path d='M8 11H7V12H8V11Z' fill='black' />
        <path d='M11 11H12V12H11V11Z' fill='black' />
        <path d='M10 11H9V12H10V11Z' fill='black' />
        <path d='M13 11H14V12H13V11Z' fill='black' />
        <path d='M14 13H7V14H14V13Z' fill='black' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M20 20H2V9H4V6H22V9.05001C21.8384 9.01722 21.6712 9 21.5 9C21.3288 9 21.1616 9.01722 21 9.05001C19.8589 9.28164 19 10.2905 19 11.5C19 12.7095 19.8589 13.7184 21 13.95C21.1616 13.9828 21.3288 14 21.5 14C21.6712 14 21.8384 13.9828 22 13.95V17H20V20ZM17 7H21V8.03544C19.3039 8.27806 18 9.73676 18 11.5C18 13.2632 19.3039 14.7219 21 14.9646V16H17V15H16V16H5V7H16V8H17V7ZM4 17V10H3V19H19V17H4Z'
          fill='black'
        />
      </svg>
    </IconComponent>
  );
}

export { PeatIconSale };
