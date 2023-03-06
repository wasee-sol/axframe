import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";

function AXFIconHomeFlat(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M3.8906 7.40627L10.8906 2.7396C11.5624 2.29173 12.4376 2.29173 13.1094 2.7396L20.1094 7.40627C20.6658 7.7772 21 8.40166 21 9.07037V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9.07037C3 8.40166 3.3342 7.7772 3.8906 7.40627Z'
          fill='black'
          fillOpacity='0.15'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.5547 3.57165L19.5547 8.23832L20.1094 7.40627L19.5547 8.23832C19.8329 8.42378 20 8.73601 20 9.07037V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V9.07037C4 8.73602 4.1671 8.42378 4.4453 8.23832L11.4453 3.57165C11.7812 3.34772 12.2188 3.34772 12.5547 3.57165ZM3.8906 7.40627L10.8906 2.7396C11.5624 2.29174 12.4376 2.29174 13.1094 2.7396L20.1094 7.40627C20.6658 7.7772 21 8.40166 21 9.07037V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9.07037C3 8.40166 3.3342 7.7772 3.8906 7.40627ZM8 18H16V17H8V18Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}

export { AXFIconHomeFlat };
