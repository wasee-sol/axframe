import * as React from "react";
import { Route, useNavigate } from "react-router-dom";
import { PathRouteProps } from "react-router/lib/components";
import useUserStore from "stores/useUserStore";

interface Props extends PathRouteProps {
  restricted: boolean;
}

function PublicRoute({ element, restricted, ...rest }: Props) {
  const me = useUserStore((s) => s.me);
  const navigate = useNavigate();

  if (me && restricted) {
    navigate("/");
  }

  return <Route {...rest} element={element} />;
}

export default PublicRoute;
