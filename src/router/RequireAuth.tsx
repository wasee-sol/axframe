import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useUserStore from "../stores/useUserStore";

interface Props {
  children: JSX.Element;
}

function RequireAuth({ children }: Props) {
  const loaded = useUserStore((s) => s.loaded);
  const me = useUserStore((s) => s.me);
  const location = useLocation();

  if (loaded && !me) {
    return <Navigate to='/sign-in' state={{ from: location }} replace />;
  }

  if (!loaded) {
    return null;
  }

  return children;
}

export default RequireAuth;
