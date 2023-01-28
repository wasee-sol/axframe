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

export enum MenuIconType {
  Default,
  Graph,
  Inbox,
  Project,
  Report,
  Setting,
  Template,
  WriteForm,
  ListSearch,
}

interface Props {
  role?: string;
  typeName: keyof typeof MenuIconType;
  fontSize?: number;
}

export const menuIcons = Object.values(MenuIconType).filter((v) => isNaN(Number(v)));

export function MenuIcon({ typeName, ...rest }: Props) {
  switch (typeName) {
    case "Graph":
      return <AXFIGraph className={"ant-menu-item-icon"} {...rest} />;
    case "Inbox":
      return <AXFIInbox className={"ant-menu-item-icon"} {...rest} />;
    case "Project":
      return <AXFIProject className={"ant-menu-item-icon"} {...rest} />;
    case "Report":
      return <AXFIReport className={"ant-menu-item-icon"} {...rest} />;
    case "Setting":
      return <AXFISetting className={"ant-menu-item-icon"} {...rest} />;
    case "Template":
      return <AXFITemplate className={"ant-menu-item-icon"} {...rest} />;
    case "WriteForm":
      return <AXFIWriteForm className={"ant-menu-item-icon"} {...rest} />;
    case "ListSearch":
      return <AXFIListSearch className={"ant-menu-item-icon"} {...rest} />;
    case "Default":
    default:
      return <AXFIDefaultProgram className={"ant-menu-item-icon"} {...rest} />;
  }
}
