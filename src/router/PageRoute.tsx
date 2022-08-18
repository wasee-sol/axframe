import * as React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppStore } from "stores";
import useUserStore from "stores/useUserStore";
import { getFlattedUserMenus } from "utils/store";
import usePageTabStore from "../stores/usePageTabStore";
import RequireAuth from "./RequireAuth";
import RestrictAuth from "./RestrictAuth";

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
  const menus = useUserStore((s) => s.menus);
  const setSelectedMenuUuid = useUserStore((s) => s.setSelectedMenuUuid);
  const setActiveTabByPath = usePageTabStore((s) => s.setActiveTabByPath);
  const location = useLocation();

  React.useEffect(() => {
    if (menus.length) {
      const currentMenu = getFlattedUserMenus(menus).find((fMenu) => fMenu.path === location.pathname);
      setSelectedMenuUuid(currentMenu?.uuid ?? "");
      if (currentMenu || location.pathname === "/") setActiveTabByPath(location.pathname, currentMenu);
    }
  }, [location.pathname, menus, setActiveTabByPath, setSelectedMenuUuid]);

  return (
    <Routes>
      <Route
        element={
          <RequireAuth>
            <React.Suspense fallback={<div>Loading...</div>}>
              <FrameProgram sideMenuOpened={sideMenuOpened} />
            </React.Suspense>
          </RequireAuth>
        }
      >
        <Route path='/' element={<HomeController />} />
        <Route path='/analytics' element={<AnalyticsController />} />
        <Route path='/counseling-registration' element={<CounselingController />} />
        <Route path='/counseling-list' element={<CounselingController />} />
        <Route path='/inbox' element={<InboxController />} />
        <Route path='/project' element={<ProjectController />} />
        <Route path='/report' element={<ReportController />} />
        <Route path='/setting' element={<SettingController />} />
        <Route path='/template' element={<TemplateController />} />
        <Route path='/about:blank' element={<BlankPageController />} />
      </Route>
      <Route
        element={
          <RestrictAuth>
            <React.Suspense fallback={<div>Loading...</div>}>
              <FrameDefault />
            </React.Suspense>
          </RestrictAuth>
        }
      >
        <Route path='/sign-in' element={<SignInController />} />
      </Route>
    </Routes>
  );
}

export default PageRoute;
