import * as React from "react";
import { IconComponent, IconProps } from "./IconComponent";

function IconLangSelector(props: IconProps) {
  return (
    <IconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='2' y='4' width='20' height='16' rx='2' fill='black' fillOpacity='0.15' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M20 5H12V9H14V7H15V9H17V10H16.7324C16.9026 10.2942 17 10.6357 17 11C17 12.1046 16.1046 13 15 13V15H21V11H19V13H18V8H19V10H21V6C21 5.44772 20.5523 5 20 5ZM12 19V10H13.2676C13.0974 10.2942 13 10.6357 13 11C13 11.7403 13.4022 12.3866 14 12.7324V16H15H21V18C21 18.5523 20.5523 19 20 19H12ZM14 11C14 10.4477 14.4477 10 15 10C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12C14.4477 12 14 11.5523 14 11ZM22 18V16V15V6C22 4.89543 21.1046 4 20 4H12H4C2.89543 4 2 4.89543 2 6V18C2 19.0355 2.787 19.8873 3.79551 19.9897C3.86275 19.9965 3.93096 20 4 20H12H20C21.1046 20 22 19.1046 22 18ZM7.5 7.5C7.69865 7.5 7.87846 7.6176 7.95808 7.79959L11.4581 15.7996C11.5688 16.0526 11.4534 16.3474 11.2004 16.4581C10.9474 16.5688 10.6526 16.4534 10.5419 16.2004L9.173 13.0714H5.82701L4.45808 16.2004C4.3474 16.4534 4.05258 16.5688 3.79959 16.4581C3.5466 16.3474 3.43124 16.0526 3.54193 15.7996L7.04193 7.79959C7.12155 7.6176 7.30136 7.5 7.5 7.5ZM8.7355 12.0714L7.5 9.24745L6.26451 12.0714H8.7355Z'
          fill='black'
        />
      </svg>
    </IconComponent>
  );
}

export { IconLangSelector };
