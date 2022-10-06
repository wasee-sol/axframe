import { MenuEnum, MenuItem } from "@types";
import { ROUTES, RawRoute } from "./Routes";

interface RawMenu {
  menuId?: MenuEnum;
  route: RawRoute;
  children?: RawMenu[];
}

export const menus: RawMenu[] = [
  {
    menuId: MenuEnum.DASHBOARD,
    route: ROUTES.DASHBOARD,
  },
  {
    route: ROUTES.EXAMPLES,
    children: [
      {
        route: ROUTES.EXAMPLES.children.LIST_DETAIL,
        children: [
          {
            menuId: MenuEnum.SAMPLE_REGISTRATION,
            route: ROUTES.EXAMPLES.children.LIST_DETAIL.children.REGISTRATION,
          },
          {
            menuId: MenuEnum.SAMPLE_LIST,
            route: ROUTES.EXAMPLES.children.LIST_DETAIL.children.LIST,
          },
        ],
      },
      {
        menuId: MenuEnum.SAMPLE_LIST_WITH_MODAL,
        route: ROUTES.EXAMPLES.children.LIST_WITH_MODAL,
      },
      {
        menuId: MenuEnum.SAMPLE_LIST_WITH_DRAWER,
        route: ROUTES.EXAMPLES.children.LIST_WITH_DRAWER,
      },
    ],
  },
  {
    menuId: MenuEnum.SETTING,
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
