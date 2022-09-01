import * as React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppStore, usePageTabStore, useUserStore } from "stores";
import { getFlattedMenus } from "utils/store";
import { MENUS } from "./menus";
import RequireAuth from "./RequireAuth";
import RestrictAuth from "./RestrictAuth";
import { ROUTES } from "./Routes";

const FrameDefault = React.lazy(() => import("@template/pageFrame/FrameDefault"));
const FrameProgram = React.lazy(() => import("@template/pageFrame/FrameProgram"));

const AnalyticsController = React.lazy(() => import("@controller/pages/AnalyticsController"));
const BlankPageController = React.lazy(() => import("@controller/pages/BlankPageController"));
const CounselingController = React.lazy(() => import("@controller/pages/CounselingController"));
const HomeController = React.lazy(() => import("@controller/pages/HomeController"));
const InboxController = React.lazy(() => import("@controller/pages/InboxController"));
const ProjectController = React.lazy(() => import("@controller/pages/ProjectController"));
const ReportController = React.lazy(() => import("@controller/pages/ReportController"));
const SettingController = React.lazy(() => import("@controller/pages/SettingController"));
const SignInController = React.lazy(() => import("@controller/pages/SignInController"));
const TemplateController = React.lazy(() => import("@controller/pages/TemplateController"));

function PageRoute() {
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);
  const setSelectedMenuUuid = useUserStore((s) => s.setSelectedMenuUuid);
  const setActiveTabByPath = usePageTabStore((s) => s.setActiveTabByPath);
  const location = useLocation();

  React.useEffect(() => {
    const menus = getFlattedMenus(MENUS);
    const currentMenu = menus.find((fMenu) => fMenu.key === location.pathname);
    setSelectedMenuUuid(`${currentMenu?.key ?? ""}`);

    if (currentMenu || location.pathname === "/") {
      setActiveTabByPath(location.pathname, currentMenu?.label);
    }
  }, [location.pathname, setActiveTabByPath, setSelectedMenuUuid]);

  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <RequireAuth>
            <React.Suspense fallback={<></>}>
              <FrameProgram sideMenuOpened={sideMenuOpened} />
            </React.Suspense>
          </RequireAuth>
        }
      >
        <Route path={ROUTES.HOME.path} element={<HomeController />} />
        <Route path={ROUTES.ANALYTICS.path} element={<AnalyticsController />} />
        <Route path={ROUTES.COUNSELING.path}>
          <Route path={ROUTES.COUNSELING.children.REGISTRATION.path} element={<CounselingController />} />
          <Route path={ROUTES.COUNSELING.children.LIST.path} element={<CounselingController />} />
        </Route>
        <Route path={ROUTES.INBOX.path} element={<InboxController />} />
        <Route path={ROUTES.PROJECT.path} element={<ProjectController />} />
        <Route path={ROUTES.REPORT.path} element={<ReportController />} />
        <Route path={ROUTES.SETTING.path} element={<SettingController />} />
        <Route path={ROUTES.TEMPLATE.path} element={<TemplateController />} />
        <Route path={ROUTES.BLANK_PAGE.path} element={<BlankPageController />} />
      </Route>
      <Route
        path={"/"}
        element={
          <RestrictAuth>
            <React.Suspense fallback={<></>}>
              <FrameDefault />
            </React.Suspense>
          </RestrictAuth>
        }
      >
        <Route path={ROUTES.SIGN_IN.path} element={<SignInController />} />
      </Route>
    </Routes>
  );
}

export default PageRoute;
