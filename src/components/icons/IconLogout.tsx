import * as React from "react";
import { IconComponent, IconProps } from "./IconComponent";

function IconLogout(props: IconProps) {
  return (
    <IconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='12' cy='12' r='9' fill='black' fillOpacity='0.15' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 20C14.0289 20 15.8814 19.2447 17.2916 18H18.7083C17.0604 19.8412 14.6655 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.6655 3 17.0604 4.15875 18.7083 6H17.2916C15.8814 4.75527 14.0289 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM18.1716 8.46447L21.3536 11.6465C21.5488 11.8417 21.5488 12.1583 21.3536 12.3536L18.1716 15.5355C17.9763 15.7308 17.6597 15.7308 17.4645 15.5355C17.2692 15.3403 17.2692 15.0237 17.4645 14.8284L19.7929 12.5H14.9585C14.7205 13.9189 13.4865 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.4865 9 14.7205 10.0811 14.9585 11.5H19.7929L17.4645 9.17158C17.2692 8.97632 17.2692 8.65973 17.4645 8.46447C17.6597 8.26921 17.9763 8.26921 18.1716 8.46447Z'
          fill='black'
        />
      </svg>
    </IconComponent>
  );
}

export { IconLogout };
