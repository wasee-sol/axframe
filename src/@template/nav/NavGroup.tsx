import * as React from "react";
import styled from "@emotion/styled";
import NavHeader from "@template/nav/NavHeader";
import UserInfo from "@template/nav/UserInfo";
import NavUserMenu from "@template/nav/NavUserMenu";
import { Menu } from "stores/useUserMenuStore";
import { Member } from "stores/useUserStore";

interface Props {
  opened: boolean;
  me?: Member;
  menus: Menu[];
  openedUuids: string[];
  selectedUuid: string;
}

function NavGroup({ opened, me, menus, openedUuids, selectedUuid }: Props) {
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

export default NavGroup;
