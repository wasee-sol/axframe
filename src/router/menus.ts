import { LanguageType } from "../i18n";
import { ROUTES, RawRoute } from "./Routes";
import { MenuItemType } from "rc-menu/lib/interface";

export enum MenuIdType {
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
  enum?: MenuIdType;
  labels?: Record<LanguageType, string>;
  route?: Record<string, any>;
}
interface RawMenu {
  menuId?: MenuIdType;
  route: RawRoute;
  children?: RawMenu[];
}

export const menus: RawMenu[] = [
  {
    menuId: MenuIdType.DASHBOARD,
    route: ROUTES.DASHBOARD,
  },
  {
    route: ROUTES.EXAMPLES,
    children: [
      {
        route: ROUTES.EXAMPLES.children.LIST_DETAIL,
        children: [
          {
            menuId: MenuIdType.SAMPLE_REGISTRATION,
            route: ROUTES.EXAMPLES.children.LIST_DETAIL.children.REGISTRATION,
          },
          {
            menuId: MenuIdType.SAMPLE_LIST,
            route: ROUTES.EXAMPLES.children.LIST_DETAIL.children.LIST,
          },
        ],
      },
      {
        menuId: MenuIdType.SAMPLE_LIST_AND_MODAL,
        route: ROUTES.EXAMPLES.children.LIST_AND_MODAL,
      },
      {
        menuId: MenuIdType.SAMPLE_LIST_AND_DRAWER,
        route: ROUTES.EXAMPLES.children.LIST_AND_DRAWER,
      },
      {
        menuId: MenuIdType.SAMPLE_LIST_WITH_LIST,
        route: ROUTES.EXAMPLES.children.LIST_WITH_LIST,
      },
      {
        menuId: MenuIdType.SAMPLE_LIST_WITH_FORM,
        route: ROUTES.EXAMPLES.children.LIST_WITH_FORM,
      },
    ],
  },
  {
    menuId: MenuIdType.SETTING,
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
