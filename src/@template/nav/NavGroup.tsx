import { css } from "@emotion/react";
import * as React from "react";
import styled from "@emotion/styled";
import NavHeader from "@template/nav/NavHeader";
import UserInfo from "@template/nav/UserInfo";
import NavUserMenu from "@template/nav/NavUserMenu";
import { User } from "stores/useUserStore";
import { SMixinFlexColumn } from "styles/emotion";
import { useNavGroup } from "@hooks/nav/useNavGroup";
import { mergeProps } from "utils/object";
import { MenuItem } from "@types";
import NavFooter from "./NavFooter";

interface StyleProps {
  sideMenuOpened?: boolean;
}

interface Props extends StyleProps {
  me?: User;
  menus?: MenuItem[];
  openedMenuUuids?: string[];
  selectedMenuUuid?: string;
}

function NavGroup(props: Props) {
  const { sideMenuOpened, me } = mergeProps(props, useNavGroup());

  return (
    <NavGroupContainer sideMenuOpened={sideMenuOpened}>
      <NavHeader {...props} />

      {me ? (
        <NavContent sideMenuOpened={sideMenuOpened}>
          <UserInfo {...props} />
          <NavUserMenu {...props} />
        </NavContent>
      ) : (
        <div>User Not Found</div>
      )}

      <NavFooter />
    </NavGroupContainer>
  );
}

const NavGroupContainer = styled.div<StyleProps>`
  flex: 1;
  border-right: 1px solid ${(p) => p.theme.rf_border_color};
  ${SMixinFlexColumn("stretch", "stretch")};

  ${({ sideMenuOpened, theme }) => {
    if (sideMenuOpened) {
      return css``;
    }
    return css`
      background: ${theme.header_background};
    `;
  }}
`;
const NavContent = styled.div<StyleProps>`
  flex: 1;
  overflow-x: hidden;
  ${SMixinFlexColumn("stretch", "stretch")};

  ${({ sideMenuOpened, theme }) => {
    if (sideMenuOpened) {
      return css`
        width: ${theme.side_menu_open_width}px;
      `;
    }
    return css`
      width: 60px;
    `;
  }}
`;

export default NavGroup;
