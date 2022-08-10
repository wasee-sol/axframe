import NavGroup from "@template/nav/NavGroup";
import { message } from "antd";
import * as React from "react";
import useUserMenuStore from "stores/useUserMenuStore";
import useUserStore from "stores/useUserStore";
import { useAppStore } from "../../stores";

function NavGroupController() {
  const me = useUserStore((s) => s.me);
  const menus = useUserMenuStore((s) => s.menus);
  const openedUuids = useUserMenuStore((s) => s.openedUuids);
  const selectedUuid = useUserMenuStore((s) => s.selectedUuid);
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);

  const handleSignOut = React.useCallback(async () => {
    await message.info("sign out");
  }, []);

  return (
    <NavGroup
      me={me}
      opened={sideMenuOpened}
      menus={menus}
      openedUuids={openedUuids}
      selectedUuid={selectedUuid}
      onClickSignOut={handleSignOut}
    />
  );
}

export default NavGroupController;
