import * as React from "react";
import { RFIWriteForm, RFIGraph, RFIHome, RFISetting, RFIListSearch, RFIDefaultProgram } from "react-frame-icon";
import { getFlattedRoutes } from "../utils/store/getFlattedRoutes";

export interface RawRoute {
  key?: string;
  path: string;
  labels: {
    en: string;
    ko: string;
  };
  icon?: React.ReactNode;
  children?: RawRoutes;
  hideTab?: boolean;
}

export type RawRoutes = Record<string, RawRoute>;

const routes = {
  DASHBOARD: {
    path: "dashboard",
    labels: { en: "Dashboard", ko: "대시보드" },
    icon: <RFIGraph />,
  },
  DASHBOARD_VIEWER: {
    path: "dashboard/:id",
    labels: { en: "Dashboard {id}", ko: "대시보드 {id}" },
    icon: <RFIGraph />,
  },

  EXAMPLES: {
    path: "examples",
    labels: { en: "Examples", ko: "예제화면들" },
    icon: <RFIDefaultProgram />,
    children: {
      LIST_DETAIL: {
        path: "listAndDetail",
        labels: { en: "Example(List&Detail)", ko: "샘플(목록&상세)" },
        icon: <RFIWriteForm />,
        children: {
          REGISTRATION: {
            path: "registration",
            labels: { en: "Example(Registration)", ko: "샘플(등록화면)" },
            icon: <RFIWriteForm />,
          },
          LIST: {
            path: "list",
            labels: { en: "Example(List)", ko: "샘플(목록화면)" },
            icon: <RFIListSearch />,
          },
          DETAIL: {
            path: "detail/:id",
            labels: { en: `Example(detail#{id})`, ko: "샘플(상세#{id})" },
          },
        },
      },

      LIST_WITH_MODAL: {
        path: "listWithModal",
        labels: { en: "Example(List&Modal)", ko: "샘플(목록&모달)" },
        icon: <RFIListSearch />,
      },

      LIST_WITH_DRAWER: {
        path: "listWithDrawer",
        labels: { en: "Example(List&Drawer)", ko: "샘플(목록&드로워)" },
        icon: <RFIWriteForm />,
      },
    },
  },

  SETTING: {
    path: "setting",
    labels: { en: "Setting", ko: "환경설정" },
    icon: <RFISetting />,
  },

  HOME: {
    path: "",
    labels: { en: "HOME", ko: "홈" },
    icon: <RFIHome />,
    hideTab: true,
  },
  BLANK_PAGE: {
    path: "about:blank",
    labels: { en: "", ko: "" },
    hideTab: true,
  },
  SIGN_IN: {
    path: "sign-in",
    labels: { en: "SignIn", ko: "로그인" },
    hideTab: true,
  },
};

function getRoutes(routes: RawRoutes, parentPath: string): RawRoutes {
  const routeList: RawRoute[] = Object.entries(routes).map(([key, { path, labels, icon, hideTab, children }]) => {
    return {
      key,
      path: parentPath + path,
      labels,
      icon,
      hideTab,
      children: children ? getRoutes(children ?? {}, parentPath + path + "/") : undefined,
    };
  });

  return routeList.reduce((acc, cur) => ({ ...acc, [cur.key ?? ""]: cur }), {});
}

export const ROUTES = getRoutes(routes, "/") as typeof routes;
export const ROUTES_LIST: RawRoute[] = getFlattedRoutes(ROUTES);
