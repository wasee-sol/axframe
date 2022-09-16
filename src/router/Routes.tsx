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
  ROOT: {
    path: "/",
    i18nLabel: { en: "HOME", ko: "홈" },
  },
  COUNSELING: {
    path: "counseling",
    i18nLabel: { en: "Counseling", ko: "상담" },
    icon: <RFIWriteForm />,
    children: {
      REGISTRATION: {
        path: "registration",
        i18nLabel: { en: "Counseling Registration", ko: "상담 등록" },
        icon: <RFIWriteForm />,
      },
      LIST: {
        path: "list",
        i18nLabel: { en: "Counseling List", ko: "상담 목록" },
        icon: <RFIListSearch />,
      },
    },
  },
  ANALYTICS: {
    path: "analytics",
    i18nLabel: { en: "Analytics", ko: "분석/통계" },
    icon: <RFIGraph />,
  },
  INBOX: {
    path: "inbox",
    i18nLabel: { en: "Inbox", ko: "받은문서함" },
    icon: <RFIInbox />,
  },
  PROJECT: {
    path: "project",
    i18nLabel: { en: "Project", ko: "프로젝트" },
    icon: <RFIProject />,
  },
  REPORT: {
    path: "report",
    i18nLabel: { en: "Report", ko: "리포트" },
    icon: <RFIReport />,
  },
  SETTING: {
    path: "setting",
    i18nLabel: { en: "Setting", ko: "환경설정" },
    icon: <RFISetting />,
  },
  TEMPLATE: {
    path: "template",
    i18nLabel: { en: "Template", ko: "템플릿" },
    icon: <RFITemplate />,
  },
  HOME: {
    path: "",
    i18nLabel: { en: "HOME", ko: "홈" },
    icon: <RFIHome />,
    hideMenu: true,
  },
  BLANK_PAGE: {
    path: "about:blank",
    i18nLabel: { en: "" },
    icon: null,
    hideMenu: true,
  },
  SIGN_IN: {
    path: "sign-in",
    i18nLabel: { en: "SignIn", ko: "로그인" },
    icon: null,
    hideMenu: true,
  },
};
