import * as React from "react";
import styled from "@emotion/styled";
import NavHeader from "./NavHeader";
import UserInfo from "./UserInfo";
import NavUserMenu from "./NavUserMenu";

interface Props {
  opened: boolean;
}

function NavGroup({ opened }: Props) {
  return (
    <NavGroupContainer>
      <NavHeader opened={opened} />

      <NavContent>
        <UserInfo />
        <NavUserMenu />
      </NavContent>
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
