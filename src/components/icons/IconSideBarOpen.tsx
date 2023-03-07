import * as React from "react";
import { IconComponent, IconProps } from "./IconComponent";

interface Props {}

function IconSideBarOpen(props: IconProps) {
  return (
    <IconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='6' y='5' width='13' height='14' fill='black' fillOpacity='0.15' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6 4H19V5H6V4ZM9 9H19V10H9V9ZM19 14H9V15H19V14ZM6 19H19V20H6V19ZM8 12L4 16V8L8 12Z'
          fill='black'
        />
      </svg>
    </IconComponent>
  );
}

export { IconSideBarOpen };
