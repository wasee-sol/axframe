import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconCheckboxRectangleDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M15 1H1V15H15V1Z' fill='red' fillOpacity='0.3' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V2C16 0.9 15.1 0 14 0ZM15 14C15 14.6 14.6 15 14 15H2C1.4 15 1 14.6 1 14V2C1 1.4 1.4 1 2 1H14C14.6 1 15 1.4 15 2V14Z'
          fill='black'
        />
        <path d='M11 5H5V11H11V5Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconCheckboxRectangleDuo };
