import * as React from "react";
import { IconComponent, IconProps } from "./IconComponent";

interface Props {}

function IconZoom(props: IconProps) {
  return (
    <IconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
          fill='black'
          fillOpacity='0.15'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14.4972 15.3645C13.2808 16.3853 11.7122 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.7122 16.3853 13.2808 15.3645 14.4972L21 20.1327L20.1327 21L14.4972 15.3645ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z'
          fill='black'
        />
      </svg>
    </IconComponent>
  );
}

export { IconZoom };
