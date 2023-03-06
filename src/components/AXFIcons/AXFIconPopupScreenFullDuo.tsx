import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconPopupScreenFullDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M15 1H1V15H15V1Z' fill='red' fillOpacity='0.3' />
        <path d='M0 0V16H16V0H0ZM15 15H1V1H15V15Z' fill='black' />
        <path d='M12 7H13V3H9V4H12V7Z' fill='black' />
        <path d='M7 13V12H4V9H3V13H7Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconPopupScreenFullDuo };
