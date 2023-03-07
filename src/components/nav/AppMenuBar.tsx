import styled from "@emotion/styled";
import * as React from "react";
import { AppMenu, AppMenuGroup, User } from "services";
import { useI18n, useLink } from "@core/hooks";
import { PROGRAM_TYPES, useAppMenu } from "router";
import { MenuIcon } from "components/MenuIcon";
import { AXFCMenu, MenuBar } from "@axframe/contextmenu";
import { SMixinFlexRow } from "@core/styles/emotion";
import { PeatLogoClosed } from "components/icons";
import { AXFIconBrandAxisj, AXFIconBrandAxisjDuo } from "../AXFIcons";

interface StyleProps {
  sideMenuOpened?: boolean;
}
interface Props extends StyleProps {
  me?: User;
  onSignOut?: () => Promise<void>;
}

function AppMenuBar({}: Props) {
  const { currentLanguage } = useI18n();
  const { linkByMenu } = useLink();
  const { APP_MENUS } = useAppMenu();

  const menus = React.useMemo(() => {
    const getAppMenus = (menus: AppMenu[], pid: string): AXFCMenu.IMenuItem[] => {
      return menus
        .map((m, idx) => {
          const children = getAppMenus(m.children, pid + "_" + idx);

          if (m.children.length > 0 && children.length === 0) {
            return;
          }
          return {
            key: pid + "_" + idx,
            program_type: m.progCd,
            labels: m.multiLanguage,
            label: m.multiLanguage[currentLanguage],
            title: m.multiLanguage[currentLanguage],
            submenu: children.length === 0 ? undefined : children,
            click: () => {
              if (m.progCd) {
                linkByMenu({
                  key: pid + "_" + idx,
                  program_type: m.progCd as PROGRAM_TYPES,
                  labels: m.multiLanguage,
                });
              }
            },
          } as AXFCMenu.IMenuItem;
        })
        .filter(Boolean) as AXFCMenu.IMenuItem[];
    };
    const getAppMenuGroups = (menuGroups: AppMenuGroup[]) => {
      return menuGroups.map((mg, idx) => {
        const children = getAppMenus(mg.children, `${idx}`);
        return {
          icon: mg.iconTy ? <MenuIcon typeName={mg.iconTy} /> : null,
          key: mg.menuGrpCd,
          labels: mg.multiLanguage,
          label: mg.multiLanguage[currentLanguage],
          submenu: children.length === 0 ? undefined : children,
        } as AXFCMenu.IMenuItem;
      });
    };
    return getAppMenuGroups(APP_MENUS);
  }, [APP_MENUS, currentLanguage, linkByMenu]);

  if (menus.length === 0) {
    return null;
  }

  return (
    <Container>
      <AXFIconBrandAxisj style={{ margin: "0 10px" }} fontSize={16} />
      <MenuBar
        style={{ height: 33 }}
        submenu={{
          style: { minWidth: "150px" },
          placement: "bottom",
        }}
        items={menus}
      />
    </Container>
  );
}

const Container = styled.div<StyleProps>`
  ${SMixinFlexRow("flex-start", "center")};

  flex: 1;
  overflow: hidden;
  position: relative;
  line-height: 33px;
  font-size: 13px;
`;

export default AppMenuBar;
