import * as React from "react";
import { IconComponent, IconProps } from "./IconComponent";

interface Props {}

function PeatIconMegaPhone(props: IconProps) {
  return (
    <IconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 7L18 3V19L12 15V7Z' fill='black' fillOpacity='0.3' />
        <path d='M6 7C3.79086 7 2 8.79086 2 11C2 13.2091 3.79086 15 6 15H10V7H6Z' fill='black' fillOpacity='0.3' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M18 3L12 7H6C3.79086 7 2 8.79086 2 11C2 12.8638 3.27477 14.4299 5 14.874V21H9V15H12L18 19V3ZM13 14.4648L17 17.1315V4.86852L13 7.53518V14.4648ZM9 14H6C4.34315 14 3 12.6569 3 11C3 9.34315 4.34315 8 6 8H9V14ZM6 15H8V20H6V15ZM10 8H12V14H10V8Z'
          fill='black'
        />
        <path d='M19.3536 8.35355L21.3536 6.35355L20.6465 5.64645L18.6465 7.64645L19.3536 8.35355Z' fill='black' />
        <path d='M19 11.5H22V10.5H19V11.5Z' fill='black' />
        <path d='M18.6465 14.3536L20.6465 16.3536L21.3536 15.6464L19.3536 13.6464L18.6465 14.3536Z' fill='black' />
      </svg>
    </IconComponent>
  );
}

export { PeatIconMegaPhone };
