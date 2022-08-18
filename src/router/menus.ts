import { MenuProps } from "antd";
import { ROUTES } from "./Routes";

type MenuItem = Required<MenuProps>["items"][number];

interface RawMenu {
  route: Record<string, any>;
  children?: RawMenu[];
}

export const menus: RawMenu[] = [
  {
    route: ROUTES.COUNSELING,
    children: [{ route: ROUTES.COUNSELING.children.REGISTRATION }, { route: ROUTES.COUNSELING.children.LIST }],
  },
  {
    route: ROUTES.ANALYTICS,
  },
  {
    route: ROUTES.INBOX,
  },
  {
    route: ROUTES.PROJECT,
  },
  {
    route: ROUTES.REPORT,
  },
  {
    route: ROUTES.SETTING,
  },
  {
    route: ROUTES.TEMPLATE,
  },
];

function getMenus(menus: RawMenu[], parentPath: string): MenuItem[] {
  return menus.map((menu) => ({
    key: parentPath + menu.route.path,
    label: menu.route.label,
    icon: menu.route.icon,
    children: menu.children ? getMenus(menu.children, parentPath + menu.route.path + "/") : undefined,
  }));
}

export const MENUS = getMenus(menus, "/");

console.log("MENUS", MENUS);
