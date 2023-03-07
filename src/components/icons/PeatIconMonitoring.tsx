import * as React from "react";
import { IconComponent, IconProps } from "./IconComponent";

interface Props {}

function PeatIconMonitoring(props: IconProps) {
  return (
    <IconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M3.5 12L6.5 9L7.5 10L11 6L14.5 9.5L17.5 6.5V14L17 14.5H4L3.5 14V12ZM14 18H7V21H14V18Z'
          fill='black'
          fillOpacity='0.3'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M18 4V5.53513C19.1956 6.22675 20 7.51944 20 9C20 9.92435 19.6865 10.7755 19.1599 11.4528L22.3536 14.6464L21.6465 15.3536L18.4528 12.1599C18.3094 12.2714 18.1581 12.3734 18 12.4649V14C18 14.5523 17.5523 15 17 15H12V18H14V21H7V18H9V15H4C3.44772 15 3 14.5523 3 14V4C3 3.44772 3.44772 3 4 3H17C17.5523 3 18 3.44772 18 4ZM4 4H17V5.12602C16.6804 5.04375 16.3453 5 16 5C14.5643 5 13.3052 5.75642 12.5996 6.89249L10.9756 5.26854L7.47565 9.26854L6.85355 8.64645C6.75979 8.55268 6.63261 8.5 6.5 8.5C6.36739 8.5 6.24021 8.55268 6.14645 8.64645L4 10.7929L4 4ZM16 6C16.3506 6 16.6872 6.06015 17 6.17071V6.29289L14.5 8.79289L13.3327 7.62556C13.8312 6.66007 14.8385 6 16 6ZM11.0244 6.73146L12.1621 7.86919C12.0566 8.22776 12 8.60727 12 9C12 11.2091 13.7909 13 16 13C16.3453 13 16.6804 12.9562 17 12.874V14H4V12.2071L6.5 9.70711L7.52435 10.7315L11.0244 6.73146ZM16 12C16.3506 12 16.6872 11.9398 17 11.8293V7.70711L14.5 10.2071L13.0129 8.72C13.0044 8.81219 13 8.90558 13 9C13 10.6569 14.3431 12 16 12ZM19 9C19 8.1115 18.6137 7.31321 18 6.76389V11.2361C18.6137 10.6868 19 9.8885 19 9ZM13 19H8V20H13V19Z'
          fill='black'
        />
      </svg>
    </IconComponent>
  );
}

export { PeatIconMonitoring };
