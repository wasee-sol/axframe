import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserStore } from "stores";
import { getFlattedMenus } from "@core/utils/store";
import { ROUTES } from "./Routes";
import { useAppMenu } from "./useAppMenu";

interface Props {
  children: JSX.Element;
}

function RequireAuth({ children }: Props) {
  const loaded = useUserStore((s) => s.loaded);
  const me = useUserStore((s) => s.me);
  const accessibleMenus = useUserStore((s) => s.authorityList);
  const { APP_MENUS } = useAppMenu();
  const location = useLocation();
  const currentMenu = getFlattedMenus(APP_MENUS as any).find((fMenu) => fMenu.key === location.pathname);

  if (!loaded) {
    return null;
  }

  if (currentMenu && currentMenu.program_type && !accessibleMenus.includes(currentMenu.program_type)) {
    return <Navigate to={ROUTES.HOME.path} state={{ from: location }} replace />;
  }

  if (loaded && !me) {
    return <Navigate to={ROUTES.SIGN_IN.path} state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
