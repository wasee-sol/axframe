import * as React from "react";
import {
  RFIWriteForm,
  RFIGraph,
  RFIHome,
  RFIInbox,
  RFIProject,
  RFIReport,
  RFISetting,
  RFITemplate,
  RFIListSearch,
} from "react-frame-icon";

export const ROUTES = {
  COUNSELING: {
    path: "counseling",
    label: "Counseling",
    icon: <RFIWriteForm />,
    children: {
      REGISTRATION: { path: "registration", label: "Counseling Registration", icon: <RFIWriteForm /> },
      LIST: { path: "list", label: "Counseling List", icon: <RFIListSearch /> },
    },
  },
  ANALYTICS: {
    path: "analytics",
    label: "Analytics",
    icon: <RFIGraph />,
  },
  INBOX: {
    path: "inbox",
    label: "Inbox",
    icon: <RFIInbox />,
  },
  PROJECT: {
    path: "project",
    label: "Project",
    icon: <RFIProject />,
  },
  REPORT: {
    path: "report",
    label: "Report",
    icon: <RFIReport />,
  },
  SETTING: {
    path: "setting",
    label: "Setting",
    icon: <RFISetting />,
  },
  TEMPLATE: {
    path: "template",
    label: "Template",
    icon: <RFITemplate />,
  },
  HOME: {
    path: "",
    label: "",
    icon: <RFIHome />,
    hideMenu: true,
  },
  BLANK_PAGE: {
    path: "about:blank",
    label: "",
    icon: null,
    hideMenu: true,
  },
  SIGN_IN: {
    path: "sign-in",
    label: "SignIn",
    icon: null,
    hideMenu: true,
  },
};
