import * as React from "react";
import { IconComponent, IconProps } from "./IconComponent";

interface Props {}

function PeatIconOrg(props: IconProps) {
  return (
    <IconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M16 13C18.7614 13 21 10.7614 21 8C21 5.23858 18.7614 3 16 3C13.2386 3 11 5.23858 11 8C11 10.7614 13.2386 13 16 13Z'
          fill='black'
          fillOpacity='0.3'
        />
        <path
          d='M6 16C8.20914 16 10 14.2091 10 12C10 9.79086 8.20914 8 6 8C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16Z'
          fill='black'
          fillOpacity='0.3'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16 12C18.2091 12 20 10.2091 20 8C20 5.79086 18.2091 4 16 4C13.7909 4 12 5.79086 12 8C12 10.2091 13.7909 12 16 12ZM16 13C18.7614 13 21 10.7614 21 8C21 5.23858 18.7614 3 16 3C13.2386 3 11 5.23858 11 8C11 10.7614 13.2386 13 16 13ZM6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15ZM6 16C8.20914 16 10 14.2091 10 12C10 9.79086 8.20914 8 6 8C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16ZM12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z'
          fill='black'
        />
      </svg>
    </IconComponent>
  );
}

export { PeatIconOrg };
