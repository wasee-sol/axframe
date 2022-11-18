import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserStore } from "stores";
import { getFlattedMenus } from "@core/utils/store";
import { MENUS } from "./menus";
import { ROUTES } from "./Routes";

interface Props {
  children: JSX.Element;
}

function RequireAuth({ children }: Props) {
  const loaded = useUserStore((s) => s.loaded);
  const me = useUserStore((s) => s.me);
  const accessibleMenus = useUserStore((s) => s.accessibleMenus);
  const location = useLocation();
  const currentMenu = getFlattedMenus(MENUS).find((fMenu) => fMenu.key === location.pathname);

  if (!loaded) {
    return null;
  }

  if (currentMenu && currentMenu.enum && !accessibleMenus.includes(currentMenu.enum)) {
    return <Navigate to={ROUTES.HOME.path} state={{ from: location }} replace />;
  }

  if (loaded && !me) {
    return <Navigate to={ROUTES.SIGN_IN.path} state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
