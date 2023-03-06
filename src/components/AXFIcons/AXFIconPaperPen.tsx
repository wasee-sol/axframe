import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconPaperPen(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M15.7 3.99999L12 0.299988L10.3 1.99999H3C1.3 1.99999 0 3.29999 0 4.99999V16H11C12.7 16 14 14.7 14 13V5.69999L15.7 3.99999ZM14.3 3.99999L9 9.29999L6.7 6.99999L12 1.69999L14.3 3.99999ZM13 13C13 14.1 12.1 15 11 15H1V4.99999C1 3.89999 1.9 2.99999 3 2.99999H9.3L5.3 6.99999L9 10.7L13 6.69999V13Z'
          fill='black'
        />
        <path
          d='M5.4 7.59999C5.2 7.49999 5 7.49999 4.9 7.49999C4.7 7.49999 4.6 7.69999 4.5 7.89999L3.5 11.9C3.5 12.1 3.5 12.3 3.6 12.4C3.7 12.5 3.8 12.5 4 12.5H4.1L8.1 11.5C8.3 11.5 8.4 11.3 8.5 11.1C8.5 10.9 8.5 10.7 8.4 10.6L5.4 7.59999Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconPaperPen };
