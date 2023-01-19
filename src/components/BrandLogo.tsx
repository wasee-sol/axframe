import * as React from "react";
import { AXFrameLogo } from "@axframe/icon";

interface Props {
  fontSize: number;
}

function BrandLogo({ fontSize }: Props) {
  return <AXFrameLogo fontSize={fontSize} />;
}

export { BrandLogo };
