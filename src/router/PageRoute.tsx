import * as React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppStore } from "stores";
import useUserStore from "stores/useUserStore";
import { getFlattedUserMenus } from "utils/store";
import usePageTabStore from "../stores/usePageTabStore";
import RequireAuth from "./RequireAuth";
import RestrictAuth from "./RestrictAuth";

const HomeController = React.lazy(() => import("@controller/pages/HomeController"));
const SettingController = React.lazy(() => import("@controller/pages/SettingController"));
const SignInController = React.lazy(() => import("@controller/pages/SignInController"));
const BlankPageController = React.lazy(() => import("@controller/pages/BlankPageController"));
const ReportController = React.lazy(() => import("@controller/pages/ReportController"));
const FrameDefault = React.lazy(() => import("@template/pageFrame/FrameDefault"));
const FrameProgram = React.lazy(() => import("@template/pageFrame/FrameProgram"));

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
        <Route path='/setting' element={<SettingController />} />
        <Route path='/report' element={<ReportController />} />
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
