import * as React from "react";
import styled from "@emotion/styled";
import NavHeader from "./NavHeader";
import UserInfo from "./UserInfo";
import NavUserMenu from "./NavUserMenu";

interface Props {
  opened: boolean;
}

function NavGroup(props: Props) {
  return (
    <NavGroupContainer>
      <NavHeader />
      <UserInfo />
      <NavUserMenu />
    </NavGroupContainer>
  );
}

const NavGroupContainer = styled.div``;

export default NavGroup;
