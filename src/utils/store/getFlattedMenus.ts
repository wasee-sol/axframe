import { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

interface FlattedMenus {
  key: string;
  label: string;
}
export const getFlattedMenus = (menus: MenuItem[]) => {
  const useMenuFlatFn = ({ children = [], ...rest }: any) => {
    return [rest, ...children.flatMap(useMenuFlatFn)];
  };
  return menus.flatMap<MenuItem>(useMenuFlatFn) as FlattedMenus[];
};
