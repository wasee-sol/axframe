import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconXLargeThinDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M14 2H2V14H14V2Z' fill='red' fillOpacity='0.3' />
        <path
          d='M15.4 1.40001L14.6 0.600006L7.99998 7.30001L1.39998 0.600006L0.599976 1.40001L7.29998 8.00001L0.599976 14.6L1.39998 15.4L7.99998 8.70001L14.6 15.4L15.4 14.6L8.69998 8.00001L15.4 1.40001Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconXLargeThinDuo };
