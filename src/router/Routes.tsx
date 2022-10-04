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

export interface RawRoute {
  key?: string;
  path: string;
  i18nlabel: {
    en: string;
    ko: string;
  };
  icon?: React.ReactNode;
  children?: RawRoutes;
}

type RawRoutes = Record<string, RawRoute>;

const routes = {
  ROOT: {
    path: "",
    i18nlabel: { en: "HOME", ko: "홈" },
  },
  COUNSELING: {
    path: "counseling",
    i18nlabel: { en: "Counseling", ko: "상담" },
    icon: <RFIWriteForm />,
    children: {
      REGISTRATION: {
        path: "registration",
        i18nlabel: { en: "Counseling Registration", ko: "상담 등록" },
        icon: <RFIWriteForm />,
      },
      LIST: {
        path: "list",
        i18nlabel: { en: "Counseling List", ko: "상담 목록" },
        icon: <RFIListSearch />,
      },
      DETAIL: {
        path: "detail/:id",
        i18nlabel: { en: `Counseling View #{id}`, ko: "상담 조회 #{id}" },
      },
    },
  },
  ANALYTICS: {
    path: "analytics",
    i18nlabel: { en: "Analytics", ko: "분석/통계" },
    icon: <RFIGraph />,
  },
  INBOX: {
    path: "inbox",
    i18nlabel: { en: "Inbox", ko: "받은문서함" },
    icon: <RFIInbox />,
  },
  PROJECT: {
    path: "project",
    i18nlabel: { en: "Project", ko: "프로젝트" },
    icon: <RFIProject />,
  },
  REPORT: {
    path: "report",
    i18nlabel: { en: "Report", ko: "리포트" },
    icon: <RFIReport />,
  },
  SETTING: {
    path: "setting",
    i18nlabel: { en: "Setting", ko: "환경설정" },
    icon: <RFISetting />,
  },
  TEMPLATE: {
    path: "template",
    i18nlabel: { en: "Template", ko: "템플릿" },
    icon: <RFITemplate />,
  },
  HOME: {
    path: "",
    i18nlabel: { en: "HOME", ko: "홈" },
    icon: <RFIHome />,
  },
  BLANK_PAGE: {
    path: "about:blank",
    i18nlabel: { en: "", ko: "" },
  },
  SIGN_IN: {
    path: "sign-in",
    i18nlabel: { en: "SignIn", ko: "로그인" },
  },
};

function getRoutes(routes: RawRoutes, parentPath: string): RawRoutes {
  const routeList: RawRoute[] = Object.keys(routes).map((key) => {
    return {
      key,
      path: parentPath + routes[key].path,
      i18nlabel: routes[key].i18nlabel,
      icon: routes[key].icon,
      children: routes[key].children
        ? getRoutes(routes[key].children ?? {}, parentPath + routes[key].path + "/")
        : undefined,
    };
  });

  return routeList.reduce((acc, cur) => ({ ...acc, [cur.key ?? ""]: cur }), {});
}

export const ROUTES = getRoutes(routes, "/") as typeof routes;
