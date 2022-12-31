import * as React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppStore, usePageTabStore, useUserStore } from "stores";
import { getFlattedMenus } from "@core/utils/store";
import { MENUS } from "./menus";
import RequireAuth from "./RequireAuth";
import RestrictAuth from "./RestrictAuth";
import { ROUTES } from "./Routes";

const FrameDefault = React.lazy(() => import("@core/pageFrame/FrameDefault"));
const FrameProgram = React.lazy(() => import("@core/pageFrame/FrameProgram"));

const ExampleList = React.lazy(() => import("@core/pages/exampleList"));
const ExampleForm = React.lazy(() => import("@core/pages/exampleForm"));
const ExampleDetail = React.lazy(() => import("@core/pages/exampleDetail"));
const ExampleListAndModal = React.lazy(() => import("@core/pages/exampleListAndModal"));
const ExampleListAndDrawer = React.lazy(() => import("@core/pages/exampleListAndDrawer"));

const Dashboard = React.lazy(() => import("pages/dashboard"));
const Home = React.lazy(() => import("pages/home"));
const Setting = React.lazy(() => import("pages/setting"));
const SignIn = React.lazy(() => import("pages/signin"));

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
        <Route path={ROUTES.DASHBOARD.path} element={<Dashboard />} />
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
        <Route path={ROUTES.HOME.path} element={<Home />} />
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
