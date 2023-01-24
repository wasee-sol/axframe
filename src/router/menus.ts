import { LanguageType } from "../i18n";
import { ROUTES, RawRoute } from "./Routes";
import { MenuItemType } from "rc-menu/lib/interface";

export enum PROGRAM_TYPES {
  SAMPLE_REGISTRATION = "SAMPLE_REGISTRATION",
  SAMPLE_LIST = "SAMPLE_LIST",
  SAMPLE_LIST_AND_MODAL = "SAMPLE_LIST_AND_MODAL",
  SAMPLE_LIST_AND_DRAWER = "SAMPLE_LIST_AND_DRAWER",
  SAMPLE_LIST_WITH_LIST = "SAMPLE_LIST_WITH_LIST",
  SAMPLE_LIST_WITH_FORM = "SAMPLE_LIST_WITH_FORM",
  DASHBOARD = "DASHBOARD",
  SETTING = "SETTING",
}

export interface MenuItem extends MenuItemType {
  children?: MenuItem[];
  enum?: PROGRAM_TYPES;
  labels?: Record<LanguageType, string>;
  route?: Record<string, any>;
}
interface RawMenu {
  menuId?: PROGRAM_TYPES;
  route: RawRoute;
  children?: RawMenu[];
}

export const menus: RawMenu[] = [
  {
    menuId: PROGRAM_TYPES.DASHBOARD,
    route: ROUTES.DASHBOARD,
  },
  {
    route: ROUTES.EXAMPLES,
    children: [
      {
        route: ROUTES.EXAMPLES.children.LIST_DETAIL,
        children: [
          {
            menuId: PROGRAM_TYPES.SAMPLE_REGISTRATION,
            route: ROUTES.EXAMPLES.children.LIST_DETAIL.children.REGISTRATION,
          },
          {
            menuId: PROGRAM_TYPES.SAMPLE_LIST,
            route: ROUTES.EXAMPLES.children.LIST_DETAIL.children.LIST,
          },
        ],
      },
      {
        menuId: PROGRAM_TYPES.SAMPLE_LIST_AND_MODAL,
        route: ROUTES.EXAMPLES.children.LIST_AND_MODAL,
      },
      {
        menuId: PROGRAM_TYPES.SAMPLE_LIST_AND_DRAWER,
        route: ROUTES.EXAMPLES.children.LIST_AND_DRAWER,
      },
      {
        menuId: PROGRAM_TYPES.SAMPLE_LIST_WITH_LIST,
        route: ROUTES.EXAMPLES.children.LIST_WITH_LIST,
      },
      {
        menuId: PROGRAM_TYPES.SAMPLE_LIST_WITH_FORM,
        route: ROUTES.EXAMPLES.children.LIST_WITH_FORM,
      },
    ],
  },
  {
    menuId: PROGRAM_TYPES.SETTING,
    route: ROUTES.SETTING,
  },
];

function getMenus(menus: RawMenu[]): MenuItem[] {
  return menus.map((menu) => ({
    enum: menu.menuId,
    key: menu.route.path,
    labels: menu.route.labels,
    icon: menu.route.icon,
    children: menu.children ? getMenus(menu.children) : undefined,
  }));
}

export const MENUS = getMenus(menus);
