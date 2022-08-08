import * as React from "react";
import styled from "@emotion/styled";
import { Menu } from "stores";

interface Props {
  opened: boolean;
  menus: Menu[];
  openedUuids: string[];
  selectedUuid: string;
}

function NavUserMenu(props: Props) {
  return <NavUserMenuContainer>NavUserMenu</NavUserMenuContainer>;
}

const NavUserMenuContainer = styled.div``;

export default NavUserMenu;
