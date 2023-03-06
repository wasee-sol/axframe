import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconBagDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12.9 14H3.10002C2.50002 14 2.00002 13.5 2.10002 12.9L2.80002 6.9C2.90002 6.4 3.40003 6 3.90003 6H12.2C12.7 6 13.1 6.4 13.2 6.9L13.9 12.9C13.9 13.5 13.5 14 12.9 14Z'
          fill='red'
          fillOpacity='0.3'
        />
        <path
          d='M14.9 12.8L14.2 6.8C14.1 5.8 13.2 5.1 12.2 5.1H11V4C11 2.9 10.1 2 8.99998 2H6.99998C5.89998 2 4.99998 2.9 4.99998 4V5H3.89998C2.89998 5 2.09998 5.7 1.89998 6.7L1.19998 12.7C1.09998 13.3 1.29998 13.8 1.69998 14.3C1.99998 14.8 2.59998 15 3.09998 15H12.8C13.4 15 13.9 14.8 14.3 14.3C14.7 13.9 14.9 13.3 14.9 12.8ZM5.99998 4C5.99998 3.4 6.39998 3 6.99998 3H8.99998C9.59998 3 9.99998 3.4 9.99998 4V5H5.99998V4ZM5.99998 7V6H9.99998V7H5.99998ZM12.9 14H3.09998C2.49998 14 1.99998 13.5 2.09998 12.9L2.79998 6.9C2.89998 6.4 3.39998 6 3.89998 6H4.99998V9H11V6H12.1C12.6 6 13 6.4 13.1 6.9L13.8 12.9C13.9 13.5 13.5 14 12.9 14Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconBagDuo };
