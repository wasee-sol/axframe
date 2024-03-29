import * as React from "react";
import styled from "@emotion/styled";
import { useAppStore, useUserStore } from "../../stores";
import { LangSelector } from "../LangSelector";
import { IconText } from "../../@core/components/common";
import { AXFIMoon, AXFISun } from "@axframe/icon";
import { IconSideBarClosed, IconSideBarOpen } from "../icons";
import { SMixinFlexRow } from "../../@core/styles/emotion";

interface Props {}

function PageFooter({}: Props) {
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);
  const setSideMenuOpened = useAppStore((s) => s.setSideMenuOpened);
  const setOpenedMenuUuids = useUserStore((s) => s.setOpenedMenuUuids);
  const theme = useAppStore((s) => s.theme);
  const setTheme = useAppStore((s) => s.setTheme);

  const handleChangeTheme = React.useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [setTheme, theme]);

  const handleSetSideMenuOpened = React.useCallback(
    (opened: boolean) => {
      setOpenedMenuUuids([]);
      setSideMenuOpened(opened);
    },
    [setOpenedMenuUuids, setSideMenuOpened]
  );

  return (
    <Container>
      <Tools>
        <ToggleSideNavHandle>
          <IconText
            iconSize={20}
            icon={sideMenuOpened ? <IconSideBarClosed /> : <IconSideBarOpen />}
            onClick={() => {
              handleSetSideMenuOpened(!sideMenuOpened);
            }}
          />
        </ToggleSideNavHandle>

        <LangSelector />

        <IconText
          icon={theme === "light" ? <AXFIMoon /> : <AXFISun />}
          iconSize={20}
          onClick={handleChangeTheme}
          role={"theme-selector"}
        />
      </Tools>
      <FooterLinks>
        <span role={"copyright"}>2023 AXISJ Inc.</span>

        {/*<Button size={"small"} type='link'>*/}
        {/*  개인정보처리방침*/}
        {/*</Button>*/}
        {/*<Button size={"small"} type='link'>*/}
        {/*  이용약관*/}
        {/*</Button>*/}
      </FooterLinks>
    </Container>
  );
}

const Container = styled.div`
  ${SMixinFlexRow("space-between", "center")};
  flex: 1;
  padding: 0 6px;
  position: relative;
  font-size: 11px;
`;

const Tools = styled.div`
  ${SMixinFlexRow("flex-start", "center")};
  flex: 1;
  gap: 10px;
`;

const ToggleSideNavHandle = styled.div`
  height: 33px;
  border-right: 1px solid ${(p) => p.theme.border_color_base};
  ${SMixinFlexRow("center", "center")};
  padding: 0 8px;
  margin-right: 10px;
`;

const FooterLinks = styled.div`
  font-size: 11px;

  [role="copyright"] {
    //color: #000;
    color: ${(p) => p.theme.text_body_color};
    margin-right: 8px;
  }

  .ant-btn.ant-btn-sm {
    font-size: 12px;
    padding: 0 8px;
    color: ${(p) => p.theme.text_color};

    &:hover {
      color: ${(p) => p.theme.link_color};
    }
  }
`;

export { PageFooter };
