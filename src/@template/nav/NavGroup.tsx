import { css } from "@emotion/react";
import * as React from "react";
import styled from "@emotion/styled";
import NavHeader from "@template/nav/NavHeader";
import UserInfo from "@template/nav/UserInfo";
import NavUserMenu from "@template/nav/NavUserMenu";
import { SMixinFlexColumn } from "styles/emotion";
import { useNavGroupController } from "../../@controller/nav/NavGroupController";

interface StyleProps {
  opened?: boolean;
}
interface Props extends StyleProps {}

function NavGroup({ opened: _opened }: Props) {
  const { me, sideMenuOpened } = useNavGroupController();
  const opened = _opened ?? sideMenuOpened;

  return (
    <NavGroupContainer opened={opened}>
      <NavHeader />

      {me ? (
        <NavContent opened={opened}>
          <UserInfo />
          <NavUserMenu />
        </NavContent>
      ) : (
        <div>User Not Found</div>
      )}
    </NavGroupContainer>
  );
}

const NavGroupContainer = styled.div<StyleProps>`
  flex: 1;
  ${SMixinFlexColumn("stretch", "stretch")};
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
  flex: 1;
  overflow-x: hidden;
  ${SMixinFlexColumn("stretch", "stretch")};

  ${({ opened }) => {
    if (opened) {
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
