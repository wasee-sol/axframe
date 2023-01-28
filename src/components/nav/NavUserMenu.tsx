import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Menu } from "antd";
import { MenuProps } from "antd/lib/menu";
import { useI18n, useLink } from "@core/hooks";
import * as React from "react";
import { SMixinScrollerStyle } from "@core/styles/emotion";
import { MenuItem, useAppMenu } from "router";
import { useAppStore, useUserStore } from "stores";
import { AppMenu, AppMenuGroup } from "services";
import { MenuIcon } from "../MenuIcon";

interface StyleProps {
  sideMenuOpened?: boolean;
}

interface Props extends StyleProps {
  menus?: MenuItem[];
  openedMenuUuids?: string[];
  selectedMenuUuid?: string;
}

function NavUserMenu({}: Props) {
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);
  const authorityList = useUserStore((s) => s.authorityList);
  const programList = useUserStore((s) => s.programList);
  // const programList = [PROGRAM_TYPES.BUSI, PROGRAM_TYPES.CODE];
  const openedMenuUuids = useUserStore((s) => s.openedMenuUuids);
  const setOpenedMenuUuids = useUserStore((s) => s.setOpenedMenuUuids);
  const selectedMenuUuid = useUserStore((s) => s.selectedMenuUuid);
  const { currentLanguage } = useI18n();
  const { linkByMenu } = useLink();
  const { APP_MENUS } = useAppMenu();

  const menus = React.useMemo(() => {
    const getAppMenus = (menus: AppMenu[], pid: string): MenuItem[] => {
      return menus
        .map((m, idx) => {
          const children = getAppMenus(m.children, pid + "_" + idx);
          if (m.children.length > 0 && children.length === 0) {
            return;
          }
          return {
            icon: m.iconTy ? <MenuIcon typeName={m.iconTy} /> : null,
            key: pid + "_" + idx,
            program_type: m.progCd,
            labels: m.multiLanguage,
            label: m.multiLanguage[currentLanguage],
            children: children.length === 0 ? undefined : children,
          } as MenuItem;
        })
        .filter(Boolean) as MenuItem[];
    };
    const getAppMenuGroups = (menuGroups: AppMenuGroup[]) => {
      return menuGroups.map((mg, idx) => {
        const children = getAppMenus(mg.children, `${idx}`);
        return {
          icon: mg.iconTy ? <MenuIcon typeName={mg.iconTy} /> : null,
          key: mg.menuGrpCd,
          labels: mg.multiLanguage,
          label: mg.multiLanguage[currentLanguage],
          children: children.length === 0 ? undefined : children,
        } as MenuItem;
      });
    };
    return getAppMenuGroups(APP_MENUS);
  }, [APP_MENUS, authorityList, currentLanguage, programList]);

  const onSideMenuOpenChange = React.useCallback(
    (openKeys: string[]) => {
      setOpenedMenuUuids(openKeys);
    },
    [setOpenedMenuUuids]
  );

  const onClick: MenuProps["onClick"] = React.useCallback(
    ({ key }) => {
      const keyPath = key.split(/_/g);
      const menu = keyPath.reduce((acc, cur) => {
        return acc[cur].children ? acc[cur].children : acc[cur];
      }, menus);

      linkByMenu(menu);
    },
    [linkByMenu, menus]
  );

  if (menus.length === 0) {
    return null;
  }

  return (
    <NavUserMenuContainer sideMenuOpened={sideMenuOpened}>
      <Menu
        mode={"inline"}
        items={menus}
        openKeys={openedMenuUuids}
        onOpenChange={onSideMenuOpenChange}
        selectedKeys={[selectedMenuUuid]}
        inlineIndent={28}
        inlineCollapsed={!sideMenuOpened}
        onClick={onClick}
      />
    </NavUserMenuContainer>
  );
}

const NavUserMenuContainer = styled.div<StyleProps>`
  flex: 1;
  overflow: auto;
  overflow-x: hidden;
  user-select: none;

  ${({ sideMenuOpened, theme }) => {
    if (sideMenuOpened) {
      return css`
        padding: 20px 0;
        ${SMixinScrollerStyle({
          track_color: theme.body_background,
          thumb_color: theme.scroll_thumb_color,
        })};
      `;
    }
    return css`
      padding: 10px 0;
      ${SMixinScrollerStyle({
        track_color: theme.component_background,
        thumb_color: theme.scroll_thumb_color,
      })};
    `;
  }}
  .ant-menu {
    background: inherit;
    color: ${(p) => p.theme.text_heading_color};
    font-weight: 500;
  }

  // 우측에 보더값 제거
  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: 0 none;
  }

  // 메뉴의 패딩값 조절
  .ant-menu-inline .ant-menu-item {
    padding: 0 28px;
  }

  // 메뉴 아이콘 크기와 색상 조정
  .ant-menu-item .ant-menu-item-icon,
  .ant-menu-submenu-title .ant-menu-item-icon {
    font-size: 22px;
  }

  // 그룹메뉴 색상 및 스타일 조정
  .ant-menu-sub {
    &.ant-menu-inline {
      background: inherit;
      font-size: 13px;
      font-weight: 400;
      color: ${(p) => p.theme.text_body_color};
    }

    .ant-menu-item-icon {
      font-size: 20px;
    }

    .ant-menu-item-selected {
      .ant-menu-item-icon {
        color: ${(p) => p.theme.primary_color};
      }
    }
  }

  // 그룹메뉴 다운화살표 위치 조정
  .ant-menu-submenu-expand-icon,
  .ant-menu-submenu-arrow {
    right: 30px;
  }

  // 그룹메뉴 우측 패딩 값
  .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    padding-right: 38px;
  }

  // !opened menu
  .ant-menu.ant-menu-inline-collapsed {
    width: 60px;
  }

  // !opened menu padding 조절, 아이콘 크기 조절
  .ant-menu.ant-menu-inline-collapsed > .ant-menu-item,
  .ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item,
  .ant-menu.ant-menu-inline-collapsed
    > .ant-menu-item-group
    > .ant-menu-item-group-list
    > .ant-menu-submenu
    > .ant-menu-submenu-title,
  .ant-menu.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
    padding: 0 calc(50% - 22px / 2);

    .ant-menu-item-icon {
      font-size: 24px;
      margin-top: 7px;
    }
  }

  .ant-menu-sub .ant-menu-sub > .ant-menu-item {
    height: 35px;
    line-height: 35px;
    font-size: 12px;
  }
`;

export default NavUserMenu;
