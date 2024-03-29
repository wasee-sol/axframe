import * as React from "react";
import { IconComponent, IconProps } from "./IconComponent";

interface Props {}

function PeatIconCustomerCalc(props: IconProps) {
  return (
    <IconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 5H9V7.33682C8.54537 7.12085 8.0368 7 7.5 7C5.567 7 4 8.567 4 10.5C4 11.5271 4.44242 12.4509 5.14709 13.0911C3.34772 13.4819 2 15.0836 2 17V19C2 20.1046 2.89543 21 4 21H13V18H18V16H12V5Z'
          fill='black'
          fillOpacity='0.3'
        />
        <path d='M14 5H19V6H14V5Z' fill='black' />
        <path d='M19 7H14V8H19V7Z' fill='black' />
        <path d='M14 9H18V10H14V9Z' fill='black' />
        <path d='M17 11H14V12H17V11Z' fill='black' />
        <path d='M14 13H16V14H14V13Z' fill='black' />
        <path d='M18 13H17V14H18V13Z' fill='black' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 3H21V16H18V18H13V21H4C2.89543 21 2 20.1046 2 19V17C2 15.471 2.85789 14.1424 4.11858 13.4692C4.43802 13.2986 4.78333 13.1701 5.14709 13.0911C4.87724 12.8459 4.64585 12.5592 4.46303 12.241C4.16845 11.7282 4 11.1338 4 10.5C4 8.567 5.567 7 7.5 7C8.0368 7 8.54537 7.12085 9 7.33682V5H12V3ZM13 4H20V15H13V4ZM17 17V16H12.874C12.9562 16.3196 13 16.6547 13 17H17ZM10 6V8.05051C10.6186 8.68178 11 9.54635 11 10.5C11 11.1338 10.8315 11.7282 10.537 12.241C10.3542 12.5592 10.1228 12.8459 9.85291 13.0911C10.2167 13.1701 10.562 13.2986 10.8814 13.4692C11.3057 13.6957 11.6843 13.9965 12 14.3542V6H10ZM9.18044 12.351C8.90331 12.6028 8.79007 12.9883 8.887 13.35C8.98393 13.7117 9.27478 13.9889 9.64068 14.0684C10.9899 14.3614 12 15.5639 12 17V20H4C3.44772 20 3 19.5523 3 19V17C3 15.5639 4.01006 14.3614 5.35932 14.0684C5.72522 13.9889 6.01608 13.7117 6.113 13.35C6.20993 12.9883 6.09669 12.6028 5.81956 12.351C5.3147 11.8923 5 11.2336 5 10.5C5 9.11929 6.11929 8 7.5 8C8.88071 8 10 9.11929 10 10.5C10 11.2336 9.6853 11.8923 9.18044 12.351Z'
          fill='black'
        />
      </svg>
    </IconComponent>
  );
}

export { PeatIconCustomerCalc };
