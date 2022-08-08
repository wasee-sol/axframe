import * as React from "react";
import styled from "@emotion/styled";
import NavHeader from "@template/nav/NavHeader";
import UserInfo from "@template/nav/UserInfo";
import NavUserMenu from "@template/nav/NavUserMenu";
import useUserMenuStore from "stores/useUserMenuStore";
import useUserStore from "stores/useUserStore";

interface Props {
  opened: boolean;
}

function NavGroupController({ opened }: Props) {
  const me = useUserStore((s) => s.me);
  const menus = useUserMenuStore((s) => s.menus);
  const openedUuids = useUserMenuStore((s) => s.openedUuids);
  const selectedUuid = useUserMenuStore((s) => s.selectedUuid);

  return (
    <NavGroupContainer>
      <NavHeader opened={opened} />

      {me ? (
        <NavContent>
          <UserInfo me={me} opened={opened} />
          <NavUserMenu
            {...{
              opened,
              menus,
              openedUuids,
              selectedUuid,
            }}
          />
        </NavContent>
      ) : (
        <div>User Not Found</div>
      )}
    </NavGroupContainer>
  );
}

const NavGroupContainer = styled.div`
  flex: 1;
  border-right: 1px solid ${(p) => p.theme.border_color_base};
`;
const NavContent = styled.div`
  padding: 28px;
`;

export default NavGroupController;
