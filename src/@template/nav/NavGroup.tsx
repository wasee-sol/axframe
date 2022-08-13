import { css } from "@emotion/react";
import * as React from "react";
import styled from "@emotion/styled";
import NavHeader from "@template/nav/NavHeader";
import UserInfo from "@template/nav/UserInfo";
import NavUserMenu from "@template/nav/NavUserMenu";
import { User, UserMenuItem } from "stores/useUserStore";
import { SMixinFlexColumn } from "styles/emotion";
import { useNavGroupController } from "@controller/nav/NavGroupController";
import { mergeProps } from "utils/object";

interface StyleProps {
  sideMenuOpened?: boolean;
}
interface Props extends StyleProps {
  me?: User;
  menus?: UserMenuItem[];
  openedMenuUuids?: string[];
  selectedMenuUuid?: string;
}

function NavGroup(props: Props) {
  const { sideMenuOpened, me } = mergeProps(props, useNavGroupController());

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
    </NavGroupContainer>
  );
}

const NavGroupContainer = styled.div<StyleProps>`
  flex: 1;
  border-right: 1px solid ${(p) => p.theme.border_color_base};
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

  ${({ sideMenuOpened }) => {
    if (sideMenuOpened) {
      return css`
        width: 300px;
        row-gap: 20px;
      `;
    }
    return css`
      padding-top: 10px;
      width: 60px;
    `;
  }}
`;

export default NavGroup;
