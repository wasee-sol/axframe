import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconXNormalDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M10.1 8.00001L14 4.10001L14.7 3.40001L14 2.70001L13.3 2.00001L12.6 1.30001L11.9 2.00001L8.00001 5.90001L4.10001 1.90001L3.40001 1.20001L2.60001 1.90001L1.90001 2.60001L1.20001 3.40001L1.90001 4.10001L5.90001 8.00001L2.00001 11.9L1.30001 12.6L2.00001 13.3L2.70001 14L3.40001 14.7L4.10001 14L8.00001 10.1L11.9 14L12.6 14.7L13.3 14L14 13.3L14.7 12.6L14 11.9L10.1 8.00001ZM12.6 13.4L8.00001 8.70001L3.40001 13.3L2.70001 12.6L7.30001 8.00001L2.60001 3.40001L3.30001 2.70001L8.00001 7.30001L12.6 2.70001L13.3 3.40001L8.70001 8.00001L13.3 12.6L12.6 13.4Z'
          fill='red'
          fillOpacity='0.3'
        />
        <path
          d='M13.4 3.40001L12.6 2.60001L7.99998 7.30001L3.39998 2.60001L2.59998 3.40001L7.29998 8.00001L2.59998 12.6L3.39998 13.4L7.99998 8.70001L12.6 13.4L13.4 12.6L8.69998 8.00001L13.4 3.40001Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}

export { AXFIconXNormalDuo };
