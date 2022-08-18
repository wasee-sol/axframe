import { UserMenuItem } from "stores";

export const mock_userMenus: UserMenuItem[] = [
  {
    icon: "RFIWriteForm",
    uuid: "Counseling",
    label: "Counseling",
    children: [
      {
        icon: "RFIWriteForm",
        uuid: "counseling-registration",
        label: "Counseling Registration",
        path: "/counseling-registration",
        children: [],
      },
      {
        icon: "RFIListSearch",
        uuid: "counseling-list",
        label: "Counseling List",
        path: "/counseling-list",
      },
    ],
  },
  {
    icon: "RFITemplate",
    uuid: "template",
    label: "Template",
    path: "/template",
  },
  {
    icon: "RFIInbox",
    uuid: "inbox",
    label: "Inbox",
    path: "/inbox",
  },
  {
    icon: "RFIProject",
    uuid: "project",
    label: "Project",
    path: "/project",
  },
  {
    icon: "RFIReport",
    uuid: "report",
    label: "Report",
    path: "/report",
  },
  {
    icon: "RFIGraph",
    uuid: "analytics",
    label: "Analytics",
    path: "/analytics",
  },
  {
    icon: "RFISetting",
    uuid: "setting",
    label: "Settings",
    path: "/setting",
  },
];
