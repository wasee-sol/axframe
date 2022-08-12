import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useUserStore from "../stores/useUserStore";

interface Props {
  children: JSX.Element;
}

function RestrictAuth({ children }: Props) {
  const me = useUserStore((s) => s.me);
  const location = useLocation();

  if (me) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  return children;
}

export default RestrictAuth;