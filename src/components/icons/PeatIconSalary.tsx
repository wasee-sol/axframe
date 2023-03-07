import * as React from "react";
import { IconComponent, IconProps } from "./IconComponent";

interface Props {}

function PeatIconSalary(props: IconProps) {
  return (
    <IconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z'
          fill='black'
          fillOpacity='0.3'
        />
        <path d='M12 6L7.75 9H16.25L12 6Z' fill='black' fillOpacity='0.3' />
        <path
          d='M3.5 19.5V12L6.5 9.88235V14L12 16.5L17.5 14V9.88235L20.5 12V19.5L19.5 20.5H4.5L3.5 19.5Z'
          fill='black'
          fillOpacity='0.3'
        />
        <path d='M3.64645 5.64645L5.64645 3.64645L6.35356 4.35355L4.35356 6.35355L3.64645 5.64645Z' fill='black' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8ZM5 7C6.10457 7 7 6.10457 7 5C7 3.89543 6.10457 3 5 3C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7Z'
          fill='black'
        />
        <path d='M6.00607 10.843C6.00249 10.8891 6.00048 10.9356 6.00007 10.9826L6.00607 10.843Z' fill='black' />
        <path d='M10 11H12V12H10V11Z' fill='black' />
        <path d='M13 11H14V12H13V11Z' fill='black' />
        <path d='M15 13V14H9V13H15Z' fill='black' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M21 12.5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V12.5182L3.00011 12.5C3.00591 12.0194 3.24175 11.5703 3.63498 11.2927L10.5583 6.40566C11.4226 5.79555 12.5774 5.79555 13.4417 6.40566L20.365 11.2927C20.7583 11.5703 20.9942 12.0194 21 12.5ZM11.135 7.22262C11.6536 6.85656 12.3464 6.85656 12.865 7.22262L15.383 9H8.61703L11.135 7.22262ZM6.00607 10.843L4.21166 12.1097C4.07893 12.2034 4 12.3557 4 12.5182V12.7059L6 13.5294V11M18 13.5294L20 12.7059V12.5182C20 12.3557 19.9211 12.2034 19.7883 12.1097L17.9939 10.843C17.9975 10.8885 17.9995 10.9343 17.9999 10.9805C18 10.987 18 10.9935 18 11V13.5294ZM9 10C9 11.1046 8.10457 12 7 12V13.8597L12 15.9185L17 13.8597V12C15.8954 12 15 11.1046 15 10H9ZM20 19V13.7873L12 17.0815L4 13.7873V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19Z'
          fill='black'
        />
        <path d='M15 2H16V4H18V5H16V7H15V5H13V4H15V2Z' fill='black' />
        <path d='M20 6H19V7H18V8H19V9H20V8H21V7H20V6Z' fill='black' />
      </svg>
    </IconComponent>
  );
}

export { PeatIconSalary };
