import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconWriteArticle(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M13 0H3C1.3 0 0 1.3 0 3V16H13C14.7 16 16 14.7 16 13V3C16 1.3 14.7 0 13 0ZM15 13C15 14.1 14.1 15 13 15H1V3C1 1.9 1.9 1 3 1H13C14.1 1 15 1.9 15 3V13Z'
          fill='black'
        />
        <path
          d='M10.7 3.7C10.3 3.3 9.7 3.3 9.3 3.7L5 8L8 11L12.3 6.7C12.7 6.3 12.7 5.7 12.3 5.3L10.7 3.7Z'
          fill='black'
        />
        <path d='M4 12H7L4 9V12Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconWriteArticle };
