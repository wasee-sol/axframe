import NavGroup from "@template/nav/NavGroup";
import * as React from "react";
import useUserStore from "stores/useUserStore";
import { useDialog } from "hooks/useDialog";
import { useAppStore } from "stores";
import { useLink } from "../../hooks/useLink";

export function useNavGroupController() {
  const me = useUserStore((s) => s.me);
  const menus = useUserStore((s) => s.menus);
  const openedMenuUuids = useUserStore((s) => s.openedMenuUuids);
  const selectedMenuUuid = useUserStore((s) => s.selectedMenuUuid);
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);
  const setSideMenuOpened = useAppStore((s) => s.setSideMenuOpened);
  const signOut = useUserStore((s) => s.signOut);
  const { errorDialog } = useDialog();
  const { linkTo } = useLink();

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

  return {
    me,
    menus,
    openedMenuUuids,
    selectedMenuUuid,
    handleSignOut,
    sideMenuOpened,
    handleSetSideMenuOpened,
    linkTo,
  };
}

function NavGroupController() {
  return <NavGroup />;
}

export default NavGroupController;
