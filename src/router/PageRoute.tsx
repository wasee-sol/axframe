import * as React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppStore } from "stores";
import useUserStore from "stores/useUserStore";
import { getFlattedUserMenus } from "utils/store";
import BlankPageController from "../@controller/pages/BlankPageController";
import ReportController from "../@controller/pages/ReportController";
import usePageTabStore from "../stores/usePageTabStore";
import RequireAuth from "./RequireAuth";
import RestrictAuth from "./RestrictAuth";

import HomeController from "@controller/pages/HomeController";
import SettingController from "@controller/pages/SettingController";
import SignInController from "@controller/pages/SignInController";
import FrameDefault from "@template/pageFrame/FrameDefault";
import FrameProgram from "@template/pageFrame/FrameProgram";

function PageRoute() {
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);
  const menus = useUserStore((s) => s.menus);
  const setSelectedMenuUuid = useUserStore((s) => s.setSelectedMenuUuid);
  const setActiveTabByPath = usePageTabStore((s) => s.setActiveTabByPath);
  const location = useLocation();

  React.useEffect(() => {
    if (menus.length) {
      console.log("React.useEffect on pageRouter");
      const currentMenu = getFlattedUserMenus(menus).find((fMenu) => fMenu.path === location.pathname);
      setSelectedMenuUuid(currentMenu?.uuid ?? "");
      setActiveTabByPath(location.pathname);
    }
  }, [location.pathname, menus, setActiveTabByPath, setSelectedMenuUuid]);

  return (
    <Routes>
      <Route
        element={
          <RequireAuth>
            <FrameProgram sideMenuOpened={sideMenuOpened} />
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
            <FrameDefault />
          </RestrictAuth>
        }
      >
        <Route path='/sign-in' element={<SignInController />} />
      </Route>
    </Routes>
  );
}

export default PageRoute;
