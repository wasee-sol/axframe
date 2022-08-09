import * as React from "react";
import { RFIGraph, RFIInbox, RFIProject, RFIReport, RFISetting, RFITemplate, RFIWriteForm } from "react-frame-icon";
import { UserMenuItem } from "stores";

export const mock_userMenus: UserMenuItem[] = [
  {
    icon: <RFIWriteForm />,
    uuid: "consulting",
    label: "Consulting",
    path: "",
  },
  {
    icon: <RFITemplate />,
    uuid: "template",
    label: "Template",
    path: "",
  },
  {
    icon: <RFIInbox />,
    uuid: "inbox",
    label: "Inbox",
    path: "",
  },
  {
    icon: <RFIProject />,
    uuid: "project",
    label: "Project",
    path: "",
  },
  {
    icon: <RFIReport />,
    uuid: "report",
    label: "Report",
    path: "",
  },
  {
    icon: <RFIGraph />,
    uuid: "analytics",
    label: "Analytics",
    path: "",
  },
  {
    icon: <RFISetting />,
    uuid: "setting",
    label: "Settings",
    path: "",
  },
];
