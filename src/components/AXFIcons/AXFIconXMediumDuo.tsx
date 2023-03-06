import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconXMediumDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z'
          fill='red'
          fillOpacity='0.3'
        />
        <path
          d='M12.4 4.40001L11.6 3.60001L7.99998 7.30001L4.39998 3.60001L3.59998 4.40001L7.29998 8.00001L3.59998 11.6L4.39998 12.4L7.99998 8.70001L11.6 12.4L12.4 11.6L8.69998 8.00001L12.4 4.40001Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconXMediumDuo };
