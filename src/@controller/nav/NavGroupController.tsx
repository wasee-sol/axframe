import NavGroup from "@template/nav/NavGroup";
import * as React from "react";
import { useUserStore } from "stores";
import { useDialog } from "hooks/useDialog";
import { useAppStore } from "stores";
import { MENUS } from "router/menus";
import { MenuItem } from "@types";

export function useNavGroupController() {
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);
  const setSideMenuOpened = useAppStore((s) => s.setSideMenuOpened);
  const me = useUserStore((s) => s.me);
  const accessibleMenus = useUserStore((s) => s.accessibleMenus);
  const openedMenuUuids = useUserStore((s) => s.openedMenuUuids);
  const setOpenedMenuUuids = useUserStore((s) => s.setOpenedMenuUuids);
  const selectedMenuUuid = useUserStore((s) => s.selectedMenuUuid);
  const signOut = useUserStore((s) => s.signOut);
  const { errorDialog } = useDialog();

  const [signOutSpinning, setSignOutSpinning] = React.useState(false);

  const handleSignOut = React.useCallback(async () => {
    try {
      await signOut();
    } catch (err) {
      await errorDialog(err);
    }
  }, [errorDialog, signOut]);

  const handleSetSideMenuOpened = React.useCallback(
    (opened: boolean) => {
      setOpenedMenuUuids([]);
      setSideMenuOpened(opened);
    },
    [setOpenedMenuUuids, setSideMenuOpened]
  );

  const onSideMenuOpenChange = React.useCallback(
    (openKeys: string[]) => {
      setOpenedMenuUuids(openKeys);
    },
    [setOpenedMenuUuids]
  );

  const menus = React.useMemo(() => {
    const getAccessibleMenus = (menuItems: MenuItem[]) => {
      return menuItems
        .map((menuItem) => {
          if (menuItem.enum === undefined || accessibleMenus.includes(menuItem.enum)) {
            const children = menuItem.children ? getAccessibleMenus(menuItem.children) : undefined;
            if (typeof children !== "undefined" && children.length === 0) return;

            return {
              ...menuItem,
              children,
            };
          }

          return;
        })
        .filter(Boolean) as MenuItem[];
    };

    return getAccessibleMenus(MENUS);
  }, [accessibleMenus]);

  // useEffect 사용 금지.
  return {
    me,
    menus,
    openedMenuUuids,
    selectedMenuUuid,
    sideMenuOpened,
    handleSignOut,
    handleSetSideMenuOpened,
    onSideMenuOpenChange,
    signOutSpinning,
    setSignOutSpinning,
  };
}

function NavGroupController() {
  return <NavGroup />;
}

export default NavGroupController;
