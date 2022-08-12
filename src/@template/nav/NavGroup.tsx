import { css } from "@emotion/react";
import * as React from "react";
import styled from "@emotion/styled";
import NavHeader from "@template/nav/NavHeader";
import UserInfo from "@template/nav/UserInfo";
import NavUserMenu from "@template/nav/NavUserMenu";
import { UserMenuItem } from "stores/useUserMenuStore";
import { User } from "stores/useUserStore";
import { SMixinFlexColumn } from "../../styles/emotion";

interface StyleProps {
  opened: boolean;
}
interface Props extends StyleProps {
  me?: User;
  menus: UserMenuItem[];
  openedUuids: string[];
  selectedUuid: string;
  onSignOut: () => Promise<void>;
  onChangeSideMenuOpened?: (opened: boolean) => void;
}

function NavGroup({ opened, me, menus, openedUuids, selectedUuid, onSignOut, onChangeSideMenuOpened }: Props) {
  return (
    <NavGroupContainer opened={opened}>
      <NavHeader opened={opened} onChangeSideMenuOpened={onChangeSideMenuOpened} />

      {me ? (
        <NavContent opened={opened}>
          <UserInfo me={me} opened={opened} onSignOut={onSignOut} />
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

const NavGroupContainer = styled.div<StyleProps>`
  flex: 1;
  border-right: 1px solid ${(p) => p.theme.border_color_base};

  ${({ opened, theme }) => {
    if (opened) {
      return css``;
    }
    return css`
      background: ${theme.header_background};
    `;
  }}
`;
const NavContent = styled.div<StyleProps>`
  overflow-x: hidden;
  ${SMixinFlexColumn("center", "stretch")};
  row-gap: 20px;

  ${({ opened }) => {
    if (opened) {
      return css`
        width: 301px;
      `;
    }
    return css`
      width: 60px;
    `;
  }}
`;

export default NavGroup;
