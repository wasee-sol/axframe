import * as React from "react";
import { Route, useNavigate } from "react-router-dom";
import { IndexRouteProps, LayoutRouteProps, PathRouteProps } from "react-router/lib/components";
import useUserStore from "stores/useUserStore";

function PrivateRoute({ element, ...rest }: PathRouteProps | LayoutRouteProps | IndexRouteProps) {
  const me = useUserStore((s) => s.me);
  const navigate = useNavigate();

  if (!me) {
    console.log("PrivateRoute !me");
    navigate("/sign-in", { replace: true });
  }

  return <Route {...rest} element={element} />;
}

export default PrivateRoute;
