import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconRectTriangleRightDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M14 2H2V14H14V2Z' fill='red' fillOpacity='0.3' />
        <path d='M2 2V14H14V2H2ZM13 13H3V3H13V13Z' fill='black' />
        <path d='M7 5V11L10 8L7 5Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconRectTriangleRightDuo };
