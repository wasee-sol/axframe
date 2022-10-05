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
  COUNSELING: {
    path: "counseling",
    labels: { en: "Counseling", ko: "상담" },
    icon: <RFIWriteForm />,
    children: {
      REGISTRATION: {
        path: "registration",
        labels: { en: "Counseling Registration", ko: "상담 등록" },
        icon: <RFIWriteForm />,
      },
      LIST: {
        path: "list",
        labels: { en: "Counseling List", ko: "상담 목록" },
        icon: <RFIListSearch />,
      },
      DETAIL: {
        path: "detail/:id",
        labels: { en: `Counseling View #{id}`, ko: "상담 조회 #{id}" },
      },
    },
  },
  ANALYTICS: {
    path: "analytics",
    labels: { en: "Analytics", ko: "분석/통계" },
    icon: <RFIGraph />,
  },
  INBOX: {
    path: "inbox",
    labels: { en: "Inbox", ko: "받은문서함" },
    icon: <RFIInbox />,
  },
  PROJECT: {
    path: "project",
    labels: { en: "Project", ko: "프로젝트" },
    icon: <RFIProject />,
  },
  REPORT: {
    path: "report",
    labels: { en: "Report", ko: "리포트" },
    icon: <RFIReport />,
  },
  SETTING: {
    path: "setting",
    labels: { en: "Setting", ko: "환경설정" },
    icon: <RFISetting />,
  },
  TEMPLATE: {
    path: "template",
    labels: { en: "Template", ko: "템플릿" },
    icon: <RFITemplate />,
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
