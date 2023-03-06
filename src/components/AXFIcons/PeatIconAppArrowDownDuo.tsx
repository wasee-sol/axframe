import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function PeatIconAppArrowDownDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12.6 5.60001L13.3 6.30001L8.00001 11.7L2.60001 6.40001L3.30001 5.70001L8.00001 10.3L12.6 5.60001ZM12.6 4.20001L11.9 4.90001L8.00001 8.90001L4.10001 4.90001L3.40001 4.20001L2.60001 4.90001L1.90001 5.60001L1.20001 6.40001L1.90001 7.10001L7.30001 12.5L8.00001 13.1L8.70001 12.4L14.1 7.00001L14.8 6.30001L14.1 5.60001L13.4 4.90001L12.6 4.20001Z'
          fill='red'
          fillOpacity='0.3'
        />
        <path
          d='M7.99998 11.7L2.59998 6.40001L3.39998 5.60001L7.99998 10.3L12.6 5.60001L13.4 6.40001L7.99998 11.7Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}

export { PeatIconAppArrowDownDuo };
