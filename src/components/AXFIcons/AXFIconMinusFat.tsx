import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconMinusFat(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 7H4V9H12V7Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconMinusFat };
