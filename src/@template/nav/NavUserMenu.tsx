import { Menu } from "antd";
import * as React from "react";
import styled from "@emotion/styled";
import { MenuProps } from "antd/lib/menu";
import { UserMenuItem } from "stores";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

interface Props {
  opened: boolean;
  menus: UserMenuItem[];
  openedUuids: string[];
  selectedUuid: string;
}

function NavUserMenu({ menus }: Props) {
  const items: MenuItem[] = React.useMemo(() => {
    return menus.map((menu) => {
      const { label, icon, uuid, children } = menu;
      return getItem(label, uuid, icon);
    });
  }, []);

  return (
    <NavUserMenuContainer>
      <Menu mode={"inline"} items={items} />
    </NavUserMenuContainer>
  );
}

const NavUserMenuContainer = styled.div`
  .ant-menu {
    background: inherit;
    color: ${(p) => p.theme.text_heading_color};
    font-weight: 500;
  }
  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: 0 none;
  }

  .ant-menu-item .ant-menu-item-icon {
    font-size: 22px;
    color: ${(p) => p.theme.primary_color};
  }
`;

export default NavUserMenu;
