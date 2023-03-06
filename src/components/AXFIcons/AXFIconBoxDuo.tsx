import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconBoxDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15 4L8 7L1 4L0 5V11L1 12L8.1 16L15 12L16 11V5L15 4Z'
          fill='red'
          fillOpacity='0.3'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.6 1.1C8.2 0.899998 7.7 0.899998 7.3 1.1L1.7 3.8C1.6 3.8 1.6 3.9 1.5 3.9L7.3 6.7C7.7 6.9 8.2 6.9 8.6 6.7L14.4 3.9C14.3 3.9 14.3 3.8 14.2 3.8L8.6 1.1ZM0.9 5C0.9 4.9 0.9 4.8 1 4.6L7 7.5C7.2 7.6 7.4 7.7 7.6 7.7V15C7.5 15 7.5 15 7.4 14.9L1.8 12.2C1.2 12 0.9 11.5 0.9 11V5ZM8.5 15C8.6 15 8.6 15 8.7 14.9L14.3 12.2C14.8 12 15.1 11.5 15.1 11V5C15.1 4.9 15.1 4.8 15 4.6L9 7.5C8.9 7.6 8.7 7.7 8.5 7.7V15ZM6.9 0.199998C7.6 -0.100002 8.3 -0.100002 9 0.199998L14.7 3C15.5 3.4 16 4.2 16 5V11C16 11.9 15.5 12.7 14.7 13L9.1 15.7C8.4 16 7.7 16 7 15.7L1.3 13C0.5 12.6 0 11.8 0 11V5C0 4.1 0.5 3.3 1.3 3L6.9 0.199998Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconBoxDuo };
