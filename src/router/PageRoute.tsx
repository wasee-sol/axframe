import * as React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppStore, usePageTabStore, useUserStore } from "stores";
import { getFlattedMenus } from "@core/utils/store";
import { MENUS } from "./menus";
import RequireAuth from "./RequireAuth";
import RestrictAuth from "./RestrictAuth";
import { ROUTES } from "./Routes";

const FrameDefault = React.lazy(() => import("@core/templates/pageFrame/FrameDefault"));
const FrameProgram = React.lazy(() => import("@core/templates/pageFrame/FrameProgram"));

const ExampleList = React.lazy(() => import("@core/templates/exampleList"));
const ExampleForm = React.lazy(() => import("@core/templates/exampleForm"));
const ExampleDetail = React.lazy(() => import("@core/templates/exampleDetail"));
const ExampleListAndModal = React.lazy(() => import("@core/templates/exampleListAndModal"));
const ExampleListAndDrawer = React.lazy(() => import("@core/templates/exampleListAndDrawer"));

const Dashboard = React.lazy(() => import("templates/pages/Dashboard"));
const DashboardViewer = React.lazy(() => import("templates/pages/DashboardViewer"));
const Home = React.lazy(() => import("templates/pages/Home"));
const Setting = React.lazy(() => import("templates/pages/Setting"));
const SignIn = React.lazy(() => import("templates/pages/SignIn"));

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
        <Route path={ROUTES.DASHBOARD.path} element={<Dashboard />} />
        <Route path={ROUTES.DASHBOARD_VIEWER.path} element={<DashboardViewer />} />
        <Route path={ROUTES.EXAMPLES.path}>
          <Route path={ROUTES.EXAMPLES.children.LIST_DETAIL.path}>
            <Route path={ROUTES.EXAMPLES.children.LIST_DETAIL.children.REGISTRATION.path} element={<ExampleForm />} />
            <Route path={ROUTES.EXAMPLES.children.LIST_DETAIL.children.LIST.path} element={<ExampleList />} />
            <Route path={ROUTES.EXAMPLES.children.LIST_DETAIL.children.DETAIL.path} element={<ExampleDetail />} />
          </Route>
          <Route path={ROUTES.EXAMPLES.children.LIST_AND_MODAL.path} element={<ExampleListAndModal />} />
          <Route path={ROUTES.EXAMPLES.children.LIST_AND_DRAWER.path} element={<ExampleListAndDrawer />} />
        </Route>
        <Route path={ROUTES.SETTING.path} element={<Setting />} />
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
