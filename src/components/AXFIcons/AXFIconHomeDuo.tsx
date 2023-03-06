import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconHomeDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M13.1 15H2.9C2.4 15 2 14.6 2 14V6.5C2 6.2 2.1 5.9 2.4 5.7L7.5 1.4C7.8 1.2 8.2 1.2 8.5 1.4L13.6 5.7C13.9 5.9 14 6.2 14 6.5V14C14 14.6 13.6 15 13.1 15Z'
          fill='red'
          fillOpacity='0.3'
        />
        <path
          d='M14.3 4.9L9.1 0.599997C8.8 0.399997 8.4 0.199997 8 0.199997C7.6 0.199997 7.2 0.299997 6.9 0.599997L1.7 4.9C1.3 5.3 1 5.9 1 6.5V14C1 15.1 1.8 16 2.9 16H13.2C14.2 16 15.1 15.1 15.1 14V6.5C15 5.9 14.7 5.3 14.3 4.9ZM14 14C14 14.6 13.6 15 13.1 15H2.9C2.4 15 2 14.6 2 14V6.5C2 6.2 2.1 5.9 2.4 5.7L7.5 1.4C7.7 1.3 7.8 1.2 8 1.2C8.2 1.2 8.3 1.3 8.5 1.4L13.6 5.7C13.9 5.9 14 6.2 14 6.5V14Z'
          fill='black'
        />
        <path d='M11 12H5V13H11V12Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconHomeDuo };
