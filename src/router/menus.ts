import { MenuEnum, MenuItem } from "@types";
import { ROUTES } from "./Routes";

interface RawMenu {
  menuId?: MenuEnum;
  route: Record<string, any>;
  children?: RawMenu[];
}

export const menus: RawMenu[] = [
  {
    route: ROUTES.COUNSELING,
    children: [
      {
        menuId: MenuEnum.COUNSELING_REGISTRATION,
        route: ROUTES.COUNSELING.children.REGISTRATION,
      },
      {
        menuId: MenuEnum.COUNSELING_LIST,
        route: ROUTES.COUNSELING.children.LIST,
      },
    ],
  },
  {
    menuId: MenuEnum.ANALYTICS,
    route: ROUTES.ANALYTICS,
  },
  {
    menuId: MenuEnum.INBOX,
    route: ROUTES.INBOX,
  },
  {
    menuId: MenuEnum.PROJECT,
    route: ROUTES.PROJECT,
  },
  {
    menuId: MenuEnum.REPORT,
    route: ROUTES.REPORT,
  },
  {
    menuId: MenuEnum.SETTING,
    route: ROUTES.SETTING,
  },
  {
    menuId: MenuEnum.TEMPLATE,
    route: ROUTES.TEMPLATE,
  },
];

function getMenus(menus: RawMenu[]): MenuItem[] {
  return menus.map((menu) => ({
    enum: menu.menuId,
    key: menu.route.path,
    i18nlabel: menu.route.i18nlabel,
    icon: menu.route.icon,
    children: menu.children ? getMenus(menu.children) : undefined,
  }));
}

export const MENUS = getMenus(menus);
