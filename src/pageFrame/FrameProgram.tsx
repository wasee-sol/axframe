import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import { Outlet } from "react-router-dom";
import { SMixinFlexColumn, SMixinFlexRow } from "@core/styles/emotion";
import NavGroup from "components/nav/NavGroup";
import TabGroup from "components/tabs/TabGroup";
import { Button } from "antd";
import Logo from "components/nav/Logo";
import AppMenuBarTools from "components/nav/AppMenuBarTools";
import AppMenuBar from "components/nav/AppMenuBar";
import { usePageTabStore } from "@core/stores/usePageTabStore";
import { LangSelector } from "../components/LangSelector";
import { IconText } from "../@core/components/common";
import { AXFIMoon, AXFISun } from "@axframe/icon";
import { IconSideBarClosed, IconSideBarOpen } from "../components/icons";
import { PageFooter } from "../components/nav/PageFooter";

interface StyleProps {
  sideMenuOpened: boolean;
}

interface Props extends StyleProps {}

function FrameProgram({ sideMenuOpened }: Props) {
  const pageTabLoaded = usePageTabStore((s) => s.loaded);

  return (
    <PageFrameContainer>
      <PageFrameHeaderToolBar>
        <AppMenuBar />
        <AppMenuBarTools />
      </PageFrameHeaderToolBar>
      <PageFrameHeader>
        <Logo />
        {pageTabLoaded && <TabGroup />}
      </PageFrameHeader>

      <PageFrameContent>
        <PageFrameNav sideMenuOpened={sideMenuOpened}>
          <NavGroup />
        </PageFrameNav>
        <Content>
          <React.Suspense fallback={<></>}>
            <Outlet />
          </React.Suspense>
        </Content>
      </PageFrameContent>

      <PageFrameFooter>
        <PageFooter />
      </PageFrameFooter>
    </PageFrameContainer>
  );
}

const PageFrameContainer = styled.div`
  ${SMixinFlexColumn("stretch", "stretch")};
  height: 100vh;
  width: 100vw;
  flex: 1;
  overflow: hidden;
  background: ${(p) => p.theme.body_background};
`;
const PageFrameHeaderToolBar = styled.div`
  ${SMixinFlexRow("stretch", "stretch")};
  height: 34px;
  overflow: hidden;
  border-bottom: 1px solid ${(p) => p.theme.border_color_base};
  background: #fff;
  padding: 0 12px;
`;

const PageFrameHeader = styled.div`
  ${SMixinFlexRow("stretch", "stretch")};
  overflow: hidden;
`;
const PageFrameFooter = styled.div`
  height: 44px;
  background: ${(p) => p.theme.footer_background};
  border-top: 1px solid ${(p) => p.theme.border_color_base};
  padding: 16px;
  ${SMixinFlexRow("space-between", "center")};
`;

const PageFrameNav = styled.div<StyleProps>`
  ${SMixinFlexRow("stretch", "stretch")};
  flex: none;
  position: relative;
  padding: 3px 16px 16px 16px;
  box-sizing: border-box;
  ${({ sideMenuOpened, theme }) => {
    if (sideMenuOpened) {
      return css`
        width: ${theme.side_menu_open_width}px;
      `;
    }

    return css`
      width: 96px;
    `;
  }}

  z-index: 10;
`;
const PageFrameContent = styled.div`
  flex: 1;
  ${SMixinFlexRow("stretch", "stretch")};
  overflow: hidden;
`;
const Content = styled.div`
  flex: 1;
  overflow: auto;
  ${SMixinFlexColumn("stretch", "stretch")};
`;

export default FrameProgram;
