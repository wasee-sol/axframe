import { css } from "@emotion/react";
import * as React from "react";
import styled from "@emotion/styled";
import NavHeader from "@template/nav/NavHeader";
import UserInfo from "@template/nav/UserInfo";
import NavUserMenu from "@template/nav/NavUserMenu";
import { UserMenuItem } from "stores/useUserMenuStore";
import { Member } from "stores/useUserStore";
import { SMixinFlexColumn } from "../../styles/emotion";

interface StyleProps {
  opened: boolean;
}
interface Props extends StyleProps {
  me?: Member;
  menus: UserMenuItem[];
  openedUuids: string[];
  selectedUuid: string;
  onClickSignOut: () => void;
}

function NavGroup({ opened, me, menus, openedUuids, selectedUuid, onClickSignOut }: Props) {
  return (
    <NavGroupContainer opened={opened}>
      <NavHeader opened={opened} />

      {me ? (
        <NavContent opened={opened}>
          <UserInfo me={me} opened={opened} onClickSignOut={onClickSignOut} />
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
`;
const NavContent = styled.div<StyleProps>`
  overflow-x: hidden;
  ${SMixinFlexColumn("center", "stretch")};
  row-gap: 20px;

  ${({ opened, theme }) => {
    if (opened) {
      return css``;
    }
    return css`
      background: ${theme.header_background};
    `;
  }}
`;

export default NavGroup;
