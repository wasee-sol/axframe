import NavGroup from "@template/nav/NavGroup";
import * as React from "react";
import useUserStore from "stores/useUserStore";
import { useDialog } from "hooks/useDialog";
import { useAppStore } from "stores";

export function useNavGroupController() {
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);
  const setSideMenuOpened = useAppStore((s) => s.setSideMenuOpened);
  const me = useUserStore((s) => s.me);
  const menus = useUserStore((s) => s.menus);
  const openedMenuUuids = useUserStore((s) => s.openedMenuUuids);
  const selectedMenuUuid = useUserStore((s) => s.selectedMenuUuid);
  const setOpenedMenuUuids = useUserStore((s) => s.setOpenedMenuUuids);
  const signOut = useUserStore((s) => s.signOut);
  const { errorDialog } = useDialog();

  const handleSignOut = React.useCallback(async () => {
    try {
      await signOut();
    } catch (err) {
      await errorDialog(err);
    }
  }, [errorDialog, signOut]);

  const handleSetSideMenuOpened = React.useCallback(
    (opened: boolean) => {
      setSideMenuOpened(opened);
    },
    [setSideMenuOpened]
  );

  const onSideMenuOpenChange = React.useCallback(
    (openKeys: string[]) => {
      setOpenedMenuUuids(openKeys);
    },
    [setOpenedMenuUuids]
  );

  return {
    me,
    menus,
    openedMenuUuids,
    selectedMenuUuid,
    sideMenuOpened,
    setSideMenuOpened,
    signOut,
    handleSignOut,
    handleSetSideMenuOpened,
    onSideMenuOpenChange,
  };
}

function NavGroupController() {
  return <NavGroup />;
}

export default NavGroupController;
