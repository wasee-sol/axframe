import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function PeatIconAppArrowLeftDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9.60002 2.60001L10.3 3.30001L5.70002 8.00001L10.3 12.6L9.60002 13.3L4.30002 8.00001L9.60002 2.60001ZM9.60002 1.20001L8.90002 1.90001L3.60002 7.30001L2.90002 8.00001L3.60002 8.70001L9.00002 14.1L9.70002 14.8L10.4 14.1L11.1 13.4L11.8 12.7L11.1 12L7.10002 8.00001L11 4.10001L11.7 3.40001L11 2.70001L10.3 2.00001L9.60002 1.20001Z'
          fill='red'
          fillOpacity='0.3'
        />
        <path
          d='M9.59999 13.4L4.29999 8.00001L9.59999 2.60001L10.4 3.40001L5.69999 8.00001L10.4 12.6L9.59999 13.4Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}
export { PeatIconAppArrowLeftDuo };
