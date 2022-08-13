import HomeController from "@controller/pages/HomeController";
import SettingController from "@controller/pages/SettingController";
import SignInController from "@controller/pages/SignInController";
import FrameDefault from "@template/pageFrame/FrameDefault";
import FrameProgram from "@template/pageFrame/FrameProgram";
import * as React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppStore, UserMenuItem } from "stores";
import ReportController from "../@controller/pages/ReportController";
import useUserStore from "../stores/useUserStore";
import RequireAuth from "./RequireAuth";
import RestrictAuth from "./RestrictAuth";

export const getFlattedUserMenus = (menus: UserMenuItem[]) => {
  const useMenuFlatFn = ({ children = [], ...rest }: UserMenuItem) => [rest, ...children.flatMap(useMenuFlatFn)];
  return menus.flatMap(useMenuFlatFn);
};

function PageRoute() {
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);
  const menus = useUserStore((s) => s.menus);
  const setSelectedMenuUuid = useUserStore((s) => s.setSelectedMenuUuid);
  const location = useLocation();

  React.useEffect(() => {
    if (menus.length) {
      const currentMenu = getFlattedUserMenus(menus).find((fMenu) => fMenu.path === location.pathname);
      setSelectedMenuUuid(currentMenu?.uuid ?? "");
    }
  }, [location.pathname, menus, setSelectedMenuUuid]);

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
