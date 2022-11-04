import * as React from "react";
import {
  AXFIDefaultProgram,
  AXFIGraph,
  AXFIInbox,
  AXFIProject,
  AXFIReport,
  AXFISetting,
  AXFITemplate,
  AXFIWriteForm,
  AXFIListSearch,
} from "@axframe/icon";

export type ProgramType =
  | "AXFIGraph"
  | "AXFIInbox"
  | "AXFIProject"
  | "AXFIReport"
  | "AXFISetting"
  | "AXFITemplate"
  | "AXFIWriteForm"
  | "AXFIListSearch";

interface Props {
  type: ProgramType;
}

function ProgramIcon({ type }: Props) {
  switch (type) {
    case "AXFIGraph":
      return <AXFIGraph className={"ant-menu-item-icon"} />;
    case "AXFIInbox":
      return <AXFIInbox className={"ant-menu-item-icon"} />;
    case "AXFIProject":
      return <AXFIProject className={"ant-menu-item-icon"} />;
    case "AXFIReport":
      return <AXFIReport className={"ant-menu-item-icon"} />;
    case "AXFISetting":
      return <AXFISetting className={"ant-menu-item-icon"} />;
    case "AXFITemplate":
      return <AXFITemplate className={"ant-menu-item-icon"} />;
    case "AXFIWriteForm":
      return <AXFIWriteForm className={"ant-menu-item-icon"} />;
    case "AXFIListSearch":
      return <AXFIListSearch className={"ant-menu-item-icon"} />;
    default:
      return <AXFIDefaultProgram className={"ant-menu-item-icon"} />;
  }
}

export default ProgramIcon;
