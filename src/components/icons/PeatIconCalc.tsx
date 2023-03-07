import * as React from "react";
import { IconComponent, IconProps } from "./IconComponent";

interface Props {}

function PeatIconCalc(props: IconProps) {
  return (
    <IconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='3' y='3' width='18' height='18' rx='2' fill='black' fillOpacity='0.3' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.5 7.5V6H8.5V7.5H10V8.5H8.5V10H7.5V8.5H6V7.5H7.5Z'
          fill='black'
        />
        <path fillRule='evenodd' clipRule='evenodd' d='M18 15.5H14V14.5H18V15.5Z' fill='black' />
        <path fillRule='evenodd' clipRule='evenodd' d='M18 17.5H14V16.5H18V17.5Z' fill='black' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM12 4H5C4.44772 4 4 4.44772 4 5V12H12V20H19C19.5523 20 20 19.5523 20 19V12H12V4ZM5.64645 14.3536L7.29289 16L5.64645 17.6464L6.35355 18.3536L8 16.7071L9.64645 18.3536L10.3536 17.6464L8.70711 16L10.3536 14.3536L9.64645 13.6464L8 15.2929L6.35355 13.6464L5.64645 14.3536ZM18 8.5L14 8.5V7.5H18V8.5Z'
          fill='black'
        />
      </svg>
    </IconComponent>
  );
}

export { PeatIconCalc };
