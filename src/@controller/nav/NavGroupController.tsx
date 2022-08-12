import NavGroup from "@template/nav/NavGroup";
import * as React from "react";
import useUserStore from "stores/useUserStore";
import { useDialog } from "../../hooks/useDialog";
import { useAppStore } from "../../stores";

function NavGroupController() {
  const me = useUserStore((s) => s.me);
  const menus = useUserStore((s) => s.menus);
  const openedUuids = useUserStore((s) => s.openedUuids);
  const selectedUuid = useUserStore((s) => s.selectedUuid);
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);
  const setSideMenuOpened = useAppStore((s) => s.setSideMenuOpened);
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

  return (
    <NavGroup
      me={me}
      opened={sideMenuOpened}
      menus={menus}
      openedUuids={openedUuids}
      selectedUuid={selectedUuid}
      onSignOut={handleSignOut}
      onChangeSideMenuOpened={handleSetSideMenuOpened}
    />
  );
}

export default NavGroupController;
