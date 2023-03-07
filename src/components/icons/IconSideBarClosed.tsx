import * as React from "react";
import { IconComponent, IconProps } from "./IconComponent";

interface Props {}

function IconSideBarClosed(props: IconProps) {
  return (
    <IconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8 4C6.89543 4 6 4.89543 6 6V10H14V6C14 4.89543 13.1046 4 12 4H8ZM14 14H6V18C6 19.1046 6.89543 20 8 20H12C13.1046 20 14 19.1046 14 18V14Z'
          fill='black'
          fillOpacity='0.15'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8 5H12C12.5523 5 13 5.44772 13 6V9H7V6C7 5.44772 7.44772 5 8 5ZM7 10H13V14H7V10ZM7 15V18C7 18.5523 7.44772 19 8 19H12C12.5523 19 13 18.5523 13 18V15H7ZM6 6C6 4.89543 6.89543 4 8 4H12C13.1046 4 14 4.89543 14 6V18C14 19.1046 13.1046 20 12 20H8C6.89543 20 6 19.1046 6 18V6ZM18 12L22 8V16L18 12Z'
          fill='black'
        />
      </svg>
    </IconComponent>
  );
}

export { IconSideBarClosed };
