import * as React from "react";
import { IconComponent, IconProps } from "./IconComponent";

interface Props {}

function PeatIconPos(props: IconProps) {
  return (
    <IconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M7 4V7H10V9H15V7H20V4H7Z' fill='black' fillOpacity='0.3' />
        <path d='M3 16H21V21H3V16Z' fill='black' fillOpacity='0.3' />
        <path d='M11 5H8V6H11V5Z' fill='black' />
        <path d='M12 5H14V6H12V5Z' fill='black' />
        <path d='M8 9V10H6V9H8Z' fill='black' />
        <path d='M6 11V12H8V11H6Z' fill='black' />
        <path d='M16 8H17V10H16V8Z' fill='black' />
        <path d='M14 18V17H10V18H14Z' fill='black' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6 7V3H21V21H3V13H4V7H6ZM20 6.26756V4H7V7H11V8H10V9H14V8H12V7H14.2676C14.6134 6.4022 15.2597 6 16 6H19C19.3643 6 19.7058 6.09739 20 6.26756ZM5 8H9V13H5V8ZM15 8V10C15 10.5523 15.4477 11 16 11H17C17.5523 11 18 10.5523 18 10V8C18 7.44772 17.5523 7 17 7H16C15.4477 7 15 7.44772 15 8ZM19 7C19.5523 7 20 7.44772 20 8V15H18V11.7324C18.5978 11.3866 19 10.7403 19 10V7ZM16 12C15.6357 12 15.2942 11.9026 15 11.7324V15H17V12H16ZM14 10V15H13V10H14ZM12 10V15H11V13H10V10H12ZM4 16V20H20V16H4ZM10 15V14H4V15H10Z'
          fill='black'
        />
      </svg>
    </IconComponent>
  );
}

export { PeatIconPos };
