import { UserMenuItem } from "stores";

export const getFlattedUserMenus = (menus: UserMenuItem[]) => {
  const useMenuFlatFn = ({ children = [], ...rest }: UserMenuItem) => [rest, ...children.flatMap(useMenuFlatFn)];
  return menus.flatMap<UserMenuItem>(useMenuFlatFn);
};
