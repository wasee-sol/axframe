import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconFolderDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M15 4H1V15H15V4Z' fill='red' fillOpacity='0.3' />
        <path
          d='M7 3V2C7 0.9 6.1 0 5 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V3H7ZM15 14C15 14.6 14.6 15 14 15H2C1.4 15 1 14.6 1 14V4H15V14Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconFolderDuo };
