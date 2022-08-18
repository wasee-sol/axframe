import * as React from "react";
import {
  RFIDefaultProgram,
  RFIGraph,
  RFIInbox,
  RFIProject,
  RFIReport,
  RFISetting,
  RFITemplate,
  RFIWriteForm,
  RFIListSearch,
} from "react-frame-icon";

export type ProgramType =
  | "RFIGraph"
  | "RFIInbox"
  | "RFIProject"
  | "RFIReport"
  | "RFISetting"
  | "RFITemplate"
  | "RFIWriteForm"
  | "RFIListSearch";

interface Props {
  type: ProgramType;
}

function ProgramIcon({ type }: Props) {
  switch (type) {
    case "RFIGraph":
      return <RFIGraph className={"ant-menu-item-icon"} />;
    case "RFIInbox":
      return <RFIInbox className={"ant-menu-item-icon"} />;
    case "RFIProject":
      return <RFIProject className={"ant-menu-item-icon"} />;
    case "RFIReport":
      return <RFIReport className={"ant-menu-item-icon"} />;
    case "RFISetting":
      return <RFISetting className={"ant-menu-item-icon"} />;
    case "RFITemplate":
      return <RFITemplate className={"ant-menu-item-icon"} />;
    case "RFIWriteForm":
      return <RFIWriteForm className={"ant-menu-item-icon"} />;
    case "RFIListSearch":
      return <RFIListSearch className={"ant-menu-item-icon"} />;
    default:
      return <RFIDefaultProgram className={"ant-menu-item-icon"} />;
  }
}

export default ProgramIcon;
