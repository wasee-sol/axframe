import * as React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppStore, usePageTabStore, useUserStore } from "stores";
import RequireAuth from "./RequireAuth";
import RestrictAuth from "./RestrictAuth";
import { ROUTES, ROUTES_LIST } from "./Routes";
import { useAppMenu } from "./useAppMenu";

const FrameDefault = React.lazy(() => import("pageFrame/FrameDefault"));
const FrameProgram = React.lazy(() => import("pageFrame/FrameProgram"));

const ExampleList = React.lazy(() => import("@core/pages/LIST/App"));
const ExampleForm = React.lazy(() => import("@core/pages/FORM/App"));
const ExampleDetail = React.lazy(() => import("@core/pages/DETAIL/App"));
const ExampleListAndModal = React.lazy(() => import("@core/pages/LIST_AND_MODAL/App"));
const ExampleListAndDrawer = React.lazy(() => import("@core/pages/LIST_AND_DRAWER/App"));
const ExampleListWithList = React.lazy(() => import("@core/pages/LIST_WITH_LIST/App"));
const ExampleListWithForm = React.lazy(() => import("@core/pages/LIST_WITH_FORM/App"));
const ExampleListWithFormList = React.lazy(() => import("@core/pages/LIST_WITH_FORM_LIST/App"));
const ExampleListWithFormRow = React.lazy(() => import("@core/pages/LIST_WITH_FORM_ROW/App"));
const ExampleThreeList = React.lazy(() => import("@core/pages/THREE_LIST/App"));
const ExampleStats = React.lazy(() => import("@core/pages/STATS/App"));

const Home = React.lazy(() => import("pages/home/App"));
const SignIn = React.lazy(() => import("pages/signIn/App"));
const Error404 = React.lazy(() => import("pages/error/Error404"));

function PageRoute() {
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);
  const setSelectedMenuUuid = useUserStore((s) => s.setSelectedMenuUuid);
  const setActiveTabByPath = usePageTabStore((s) => s.setActiveTabByPath);
  const { MENUS_LIST } = useAppMenu();
  const location = useLocation();

  React.useEffect(() => {
    const route = ROUTES_LIST.find((route) => route.path === location.pathname);
    if (!route) {
      return;
    }
    const currentMenu = MENUS_LIST.find((m) => m.progCd === route.program_type);
    if (currentMenu) {
      setSelectedMenuUuid(currentMenu?.keyPath?.join("_") ?? "");
    }
    setActiveTabByPath(location.pathname);
  }, [MENUS_LIST, location.pathname, setActiveTabByPath, setSelectedMenuUuid]);

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
        <Route path={ROUTES.EXAMPLES.children.LIST_DETAIL.children.REGISTRATION.path} element={<ExampleForm />} />
        <Route path={ROUTES.EXAMPLES.children.LIST_DETAIL.children.LIST.path} element={<ExampleList />} />
        <Route path={ROUTES.EXAMPLES.children.LIST_DETAIL.children.DETAIL.path} element={<ExampleDetail />} />
        <Route path={ROUTES.EXAMPLES.children.LIST_AND_MODAL.path} element={<ExampleListAndModal />} />
        <Route path={ROUTES.EXAMPLES.children.LIST_AND_DRAWER.path} element={<ExampleListAndDrawer />} />
        <Route path={ROUTES.EXAMPLES.children.LIST_WITH_LIST.path} element={<ExampleListWithList />} />
        <Route path={ROUTES.EXAMPLES.children.LIST_WITH_FORM.path} element={<ExampleListWithForm />} />
        <Route path={ROUTES.EXAMPLES.children.LIST_WITH_FORM_LIST.path} element={<ExampleListWithFormList />} />
        <Route path={ROUTES.EXAMPLES.children.LIST_WITH_FORM_ROW.path} element={<ExampleListWithFormRow />} />
        <Route path={ROUTES.EXAMPLES.children.THREE_LIST.path} element={<ExampleThreeList />} />
        <Route path={ROUTES.EXAMPLES.children.STATS.path} element={<ExampleStats />} />

        <Route path={ROUTES.HOME.path} element={<Home />} />
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
      <Route path={"*"} element={<Error404 />} />
    </Routes>
  );
}

export default PageRoute;
