import * as React from "react";
import { AXFIWriteForm, AXFIGraph, AXFIHome, AXFISetting, AXFIListSearch, AXFIDefaultProgram } from "@axframe/icon";
import { getFlattedRoutes } from "@core/utils/store/getFlattedRoutes";

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
    icon: <AXFIGraph />,
  },
  DASHBOARD_VIEWER: {
    path: "dashboard/:id",
    labels: { en: "Dashboard {id}", ko: "대시보드 {id}" },
    icon: <AXFIGraph />,
  },

  EXAMPLES: {
    path: "examples",
    labels: { en: "Examples", ko: "예제화면들" },
    icon: <AXFIDefaultProgram />,
    children: {
      LIST_DETAIL: {
        path: "listAndDetail",
        labels: { en: "Example(List&Detail)", ko: "샘플(목록&상세)" },
        icon: <AXFIWriteForm />,
        children: {
          REGISTRATION: {
            path: "registration",
            labels: { en: "Example(Registration)", ko: "샘플(등록화면)" },
            icon: <AXFIWriteForm />,
          },
          LIST: {
            path: "list",
            labels: { en: "Example(List)", ko: "샘플(목록화면)" },
            icon: <AXFIListSearch />,
          },
          DETAIL: {
            path: "detail/:id",
            labels: { en: `Example(detail#{id})`, ko: "샘플(상세#{id})" },
          },
        },
      },

      LIST_AND_MODAL: {
        path: "listWithModal",
        labels: { en: "Example(List&Modal)", ko: "샘플(목록&모달)" },
        icon: <AXFIListSearch />,
      },

      LIST_AND_DRAWER: {
        path: "listWithDrawer",
        labels: { en: "Example(List&Drawer)", ko: "샘플(목록&드로워)" },
        icon: <AXFIWriteForm />,
      },
    },
  },

  SETTING: {
    path: "setting",
    labels: { en: "Setting", ko: "환경설정" },
    icon: <AXFISetting />,
  },

  HOME: {
    path: "",
    labels: { en: "HOME", ko: "홈" },
    icon: <AXFIHome />,
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
