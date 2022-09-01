import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import { Outlet } from "react-router-dom";
import { SMixinFlexColumn, SMixinFlexRow } from "styles/emotion";

const NavGroupController = React.lazy(() => import("@controller/nav/NavGroupController"));
const TabGroupController = React.lazy(() => import("@controller/tabs/TabGroupController"));

interface StyleProps {
  sideMenuOpened: boolean;
}

interface Props extends StyleProps {}

function FrameProgram({ sideMenuOpened }: Props) {
  return (
    <PageFrameContainer>
      <PageFrameNav sideMenuOpened={sideMenuOpened}>
        <React.Suspense fallback={<></>}>
          <NavGroupController />
        </React.Suspense>
      </PageFrameNav>
      <PageFrameContent>
        <React.Suspense fallback={<></>}>
          <TabGroupController />
        </React.Suspense>
        <Content>
          <React.Suspense fallback={<></>}>
            <Outlet />
          </React.Suspense>
        </Content>
      </PageFrameContent>
    </PageFrameContainer>
  );
}

const PageFrameContainer = styled.div`
  ${SMixinFlexRow("stretch", "stretch")};
  height: 100vh;
  width: 100vw;
  flex: 1;
`;
const PageFrameNav = styled.div<StyleProps>`
  ${SMixinFlexRow("stretch", "stretch")};
  flex: none;
  position: relative;

  ${({ sideMenuOpened }) => {
    if (sideMenuOpened) {
      return css`
        width: 301px;
      `;
    }

    return css`
      width: 61px;
    `;
  }}

  z-index: 10;
`;
const PageFrameContent = styled.div`
  flex: 1;
  ${SMixinFlexColumn("stretch", "stretch")};
`;
const Content = styled.div`
  flex: 1;
  overflow: auto;
  padding: 36px;
`;

export default FrameProgram;
