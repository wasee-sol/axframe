import { LanguageType } from "../i18n";
import { ROUTES, RawRoute } from "./Routes";
import { MenuItemType } from "rc-menu/lib/interface";

export enum MenuIdType {
  SAMPLE_REGISTRATION = "SAMPLE_REGISTRATION",
  SAMPLE_LIST = "SAMPLE_LIST",
  SAMPLE_LIST_WITH_MODAL = "SAMPLE_LIST_WITH_MODAL",
  SAMPLE_LIST_WITH_DRAWER = "SAMPLE_LIST_WITH_DRAWER",
  SAMPLE_LIST_NEW = "SAMPLE_LIST_NEW",
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
        menuId: MenuIdType.SAMPLE_LIST_WITH_MODAL,
        route: ROUTES.EXAMPLES.children.LIST_WITH_MODAL,
      },
      {
        menuId: MenuIdType.SAMPLE_LIST_WITH_DRAWER,
        route: ROUTES.EXAMPLES.children.LIST_WITH_DRAWER,
      },
      {
        menuId: MenuIdType.SAMPLE_LIST_NEW,
        route: ROUTES.EXAMPLES.children.LIST_NEW,
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
