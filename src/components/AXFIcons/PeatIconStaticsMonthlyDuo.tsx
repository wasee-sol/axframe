import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function PeatIconStaticsMonthlyDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M9 11H8V14H9V11Z' fill='red' fillOpacity='0.3' />
        <path d='M13 9H12V14H13V9Z' fill='red' fillOpacity='0.3' />
        <path
          d='M10 5.49998C10.3 5.49998 10.5 5.29998 10.5 4.99998V2.69999L11.6 4.29999C11.8 4.59999 12.2 4.59999 12.4 4.29999L13.5 2.69999V4.99998C13.5 5.29998 13.7 5.49998 14 5.49998C14.3 5.49998 14.5 5.29998 14.5 4.99998V0.999985C14.5 0.799985 14.4 0.599985 14.1 0.499985C13.9 0.399985 13.7 0.499985 13.5 0.699985L12 3.09998L10.4 0.699985C10.3 0.499985 10.1 0.399985 9.8 0.499985C9.6 0.599985 9.5 0.799985 9.5 0.999985V4.99998C9.5 5.29998 9.7 5.49998 10 5.49998Z'
          fill='black'
        />
        <path
          d='M14 14V7.99998H11V14H10V9.99998H7V14H6V3.99998H3V14H2V0.999985H1V15H15V14H14ZM9 14H8V11H9V14ZM13 14H12V8.99998H13V14Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}
export { PeatIconStaticsMonthlyDuo };
