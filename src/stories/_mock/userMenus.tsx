import { UserMenuItem } from "stores";

export const mock_userMenus: UserMenuItem[] = [
  {
    icon: "RFIWriteForm",
    uuid: "consulting",
    label: "Consulting",
    path: "/consulting",
    children: [
      {
        icon: "RFIWriteForm",
        uuid: "consulting-1",
        label: "Write",
        path: "/consulting-1",
        children: [],
      },
      {
        icon: "RFIWriteForm",
        uuid: "consulting-2",
        label: "List",
        path: "/consulting-2",
        children: [
          { uuid: "consulting-2-1", label: "List-2-1", path: "/consulting-2-1", children: [] },
          { uuid: "consulting-2-2", label: "List-2-2", path: "/consulting-2-2", children: [] },
        ],
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
    label: "Setting",
    path: "/setting",
  },
];
