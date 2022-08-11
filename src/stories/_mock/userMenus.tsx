import { UserMenuItem } from "stores";

export const mock_userMenus: UserMenuItem[] = [
  {
    icon: "RFIWriteForm",
    uuid: "consulting",
    label: "Consulting",
    path: "",
    children: [
      {
        icon: "RFIWriteForm",
        uuid: "consulting-1",
        label: "Write",
        path: "",
        children: [],
      },
      {
        icon: "RFIWriteForm",
        uuid: "consulting-2",
        label: "List",
        path: "",
        children: [
          { uuid: "consulting-2-1", label: "List-2-1", path: "", children: [] },
          { uuid: "consulting-2-2", label: "List-2-2", path: "", children: [] },
        ],
      },
    ],
  },
  {
    icon: "RFITemplate",
    uuid: "template",
    label: "Template",
    path: "",
  },
  {
    icon: "RFIInbox",
    uuid: "inbox",
    label: "Inbox",
    path: "",
  },
  {
    icon: "RFIProject",
    uuid: "project",
    label: "Project",
    path: "",
  },
  {
    icon: "RFIReport",
    uuid: "report",
    label: "Report",
    path: "",
  },
  {
    icon: "RFIGraph",
    uuid: "analytics",
    label: "Analytics",
    path: "",
  },
  {
    icon: "RFISetting",
    uuid: "setting",
    label: "Settings",
    path: "",
  },
];
