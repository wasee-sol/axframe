import NavGroup from "@template/nav/NavGroup";
import * as React from "react";
import useUserStore from "stores/useUserStore";
import { useDialog } from "hooks/useDialog";
import { useAppStore } from "stores";
import { MENUS } from "router/menus";

export function useNavGroupController() {
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);
  const setSideMenuOpened = useAppStore((s) => s.setSideMenuOpened);
  const me = useUserStore((s) => s.me);
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

  // useEffect 사용 금지.
  return {
    me,
    menus: MENUS,
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
