import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconXLargeDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 14H4C2.9 14 2 13.1 2 12V4C2 2.9 2.9 2 4 2H12C13.1 2 14 2.9 14 4V12C14 13.1 13.1 14 12 14Z'
          fill='red'
          fillOpacity='0.3'
        />
        <path
          d='M15.7 1.69999L14.3 0.299988L7.99999 6.59999L1.69999 0.299988L0.299988 1.69999L6.59999 7.99999L0.299988 14.3L1.69999 15.7L7.99999 9.39999L14.3 15.7L15.7 14.3L9.39999 7.99999L15.7 1.69999Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconXLargeDuo };
