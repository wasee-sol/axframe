import * as React from "react";
import { getFlattedRoutes } from "@core/utils/store/getFlattedRoutes";
import { PROGRAM_TYPES } from "./@types";

export interface RawRoute {
  key?: string;
  path: string;
  program_type?: PROGRAM_TYPES;
  icon?: React.ReactNode;
  children?: RawRoutes;
  hideTab?: boolean;
}

export type RawRoutes = Record<string, RawRoute>;

const routes = {
  SIGN_IN: {
    path: "sign-in",
    hideTab: true,
  },
  HOME: {
    path: "",
    hideTab: true,
  },

  EXAMPLES: {
    path: "examples",
    children: {
      LIST_DETAIL: {
        path: "listAndDetail",
        children: {
          REGISTRATION: {
            program_type: PROGRAM_TYPES.EXAMPLE_FORM,
            path: "registration",
          },
          LIST: {
            program_type: PROGRAM_TYPES.EXAMPLE_LIST,
            path: "list",
          },
          DETAIL: {
            program_type: PROGRAM_TYPES.EXAMPLE_DETAIL,
            path: "detail/:id",
          },
        },
      },

      LIST_AND_MODAL: {
        program_type: PROGRAM_TYPES.EXAMPLE_LIST_AND_MODAL,
        path: "listAndModal",
      },

      LIST_AND_DRAWER: {
        program_type: PROGRAM_TYPES.EXAMPLE_LIST_AND_DRAWER,
        path: "listAndDrawer",
      },

      LIST_WITH_LIST: {
        program_type: PROGRAM_TYPES.EXAMPLE_LIST_WITH_LIST,
        path: "listWithList",
      },

      LIST_WITH_FORM: {
        program_type: PROGRAM_TYPES.EXAMPLE_LIST_WITH_FORM,
        path: "listWithForm",
      },
    },
  },
};

function getRoutes(routes: RawRoutes, parentPath: string): RawRoutes {
  const routeList: RawRoute[] = Object.entries(routes).map(([key, { path, program_type, icon, hideTab, children }]) => {
    return {
      key,
      path: parentPath + path,
      program_type,
      icon,
      hideTab,
      children: children ? getRoutes(children ?? {}, parentPath + path + "/") : undefined,
    };
  });

  return routeList.reduce((acc, cur) => ({ ...acc, [cur.key ?? ""]: cur }), {});
}

export const ROUTES = getRoutes(routes, "/") as typeof routes;
export const ROUTES_LIST: RawRoute[] = getFlattedRoutes(ROUTES);
