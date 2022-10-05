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

const Analytics = React.lazy(() => import("@template/pages/PageAnalytics"));
const PageCounselingRegistration = React.lazy(() => import("@template/pages/PageCounselingRegistration"));
const PageCounselingList = React.lazy(() => import("@template/pages/PageCounselingList"));
const PageCounselingDetail = React.lazy(() => import("@template/pages/PageCounselingDetail"));
const Home = React.lazy(() => import("@template/pages/PageHome"));
const Inbox = React.lazy(() => import("@template/pages/PageInbox"));
const Project = React.lazy(() => import("@template/pages/PageProject"));
const Report = React.lazy(() => import("@template/pages/PageReport"));
const Setting = React.lazy(() => import("@template/pages/PageSetting"));
const SignIn = React.lazy(() => import("@template/account/SignIn"));
const Template = React.lazy(() => import("@template/pages/PageTemplate"));

function PageRoute() {
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);
  const setSelectedMenuUuid = useUserStore((s) => s.setSelectedMenuUuid);
  const setActiveTabByPath = usePageTabStore((s) => s.setActiveTabByPath);
  const location = useLocation();

  React.useEffect(() => {
    const menus = getFlattedMenus(MENUS);
    const currentMenu = menus.find((fMenu) => fMenu.key === location.pathname);
    setSelectedMenuUuid(`${currentMenu?.key ?? ""}`);

    setActiveTabByPath(location.pathname);
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
        <Route path={ROUTES.HOME.path} element={<Home />} />
        <Route path={ROUTES.ANALYTICS.path} element={<Analytics />} />
        <Route path={ROUTES.COUNSELING.path}>
          <Route path={ROUTES.COUNSELING.children.REGISTRATION.path} element={<PageCounselingRegistration />} />
          <Route path={ROUTES.COUNSELING.children.LIST.path} element={<PageCounselingList />} />
          <Route path={ROUTES.COUNSELING.children.DETAIL.path} element={<PageCounselingDetail />} />
        </Route>
        <Route path={ROUTES.INBOX.path} element={<Inbox />} />
        <Route path={ROUTES.PROJECT.path} element={<Project />} />
        <Route path={ROUTES.REPORT.path} element={<Report />} />
        <Route path={ROUTES.SETTING.path} element={<Setting />} />
        <Route path={ROUTES.TEMPLATE.path} element={<Template />} />
        <Route path={ROUTES.BLANK_PAGE.path} element={<></>} />
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
        <Route path={ROUTES.SIGN_IN.path} element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default PageRoute;
