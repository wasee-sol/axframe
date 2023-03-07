import * as React from "react";
import { IconComponent, IconProps } from "./IconComponent";

interface Props {}

function PeatIconPermission(props: IconProps) {
  return (
    <IconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.85291 13.0911C10.5576 12.4509 11 11.5271 11 10.5C11 8.567 9.433 7 7.5 7C5.567 7 4 8.567 4 10.5C4 11.5271 4.44242 12.4509 5.14709 13.0911C3.34772 13.4819 2 15.0836 2 17V19C2 20.1046 2.89543 21 4 21H13V17C13 15.0836 11.6523 13.4819 9.85291 13.0911Z'
          fill='black'
          fillOpacity='0.3'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M17.5 13C19.9853 13 22 10.9853 22 8.5C22 6.01472 19.9853 4 17.5 4C15.0147 4 13 6.01472 13 8.5C13 9.22698 13.1724 9.91369 13.4785 10.5215L10.6465 13.3535C10.3948 13.2397 10.1292 13.1511 9.85291 13.0911C10.1228 12.8459 10.3542 12.5592 10.537 12.241C10.8315 11.7282 11 11.1338 11 10.5C11 8.567 9.433 7 7.5 7C5.567 7 4 8.567 4 10.5C4 11.1338 4.16845 11.7282 4.46303 12.241C4.64585 12.5592 4.87724 12.8459 5.14709 13.0911C4.78333 13.1701 4.43802 13.2986 4.11858 13.4692C2.85789 14.1424 2 15.471 2 17V19C2 20.1046 2.89543 21 4 21H13V17C13 16.4131 12.8736 15.8556 12.6465 15.3535L15.4785 12.5215C16.0863 12.8276 16.773 13 17.5 13ZM9.87168 14.1283C9.7959 14.1054 9.71886 14.0853 9.64068 14.0684C9.27478 13.9889 8.98393 13.7117 8.887 13.35C8.79007 12.9883 8.90331 12.6028 9.18044 12.351C9.6853 11.8923 10 11.2336 10 10.5C10 9.11929 8.88071 8 7.5 8C6.11929 8 5 9.11929 5 10.5C5 11.2336 5.3147 11.8923 5.81956 12.351C6.09669 12.6028 6.20993 12.9883 6.113 13.35C6.01608 13.7117 5.72522 13.9889 5.35932 14.0684C4.01006 14.3614 3 15.5639 3 17V19C3 19.5523 3.44772 20 4 20H6V16.5C6 15.6716 6.67157 15 7.5 15C7.91421 15 8.28921 15.1679 8.56066 15.4393L9.87168 14.1283ZM9 18L11 16H11.8292C11.9398 16.3129 12 16.6495 12 17V20H9V18ZM18.5 9C19.3284 9 20 8.32843 20 7.5C20 6.67157 19.3284 6 18.5 6C17.6716 6 17 6.67157 17 7.5C17 8.32843 17.6716 9 18.5 9Z'
          fill='black'
        />
      </svg>
    </IconComponent>
  );
}

export { PeatIconPermission };
