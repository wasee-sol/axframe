import * as React from "react";
import { AXFDGDataItemStatus } from "@axframe/datagrid";
import { Tag } from "antd";

export const ITEM_STAT = {
  [AXFDGDataItemStatus.new]: (
    <Tag color='processing' style={{ marginInlineEnd: 0 }}>
      C
    </Tag>
  ),
  [AXFDGDataItemStatus.edit]: (
    <Tag color='warning' style={{ marginInlineEnd: 0 }}>
      U
    </Tag>
  ),
  [AXFDGDataItemStatus.remove]: (
    <Tag color='error' style={{ marginInlineEnd: 0 }}>
      D
    </Tag>
  ),
};
