import NavGroupController from "@controller/nav/NavGroupController";
import styled from "@emotion/styled";
import * as React from "react";
import { Outlet } from "react-router-dom";
import { SMixinFlexColumn, SMixinFlexRow } from "styles/emotion";
import TabGroupController from "../../@controller/content/tabs/TabGroupController";

interface Props {
  sideMenuOpened: boolean;
}

function FrameProgram({ sideMenuOpened }: Props) {
  return (
    <PageFrameContainer>
      <PageFrameNav className={sideMenuOpened ? "opened" : "closed"}>
        <NavGroupController />
      </PageFrameNav>
      <PageFrameContent>
        <TabGroupController />
        <Content>
          <Outlet />
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
const PageFrameNav = styled.div`
  ${SMixinFlexRow("stretch", "stretch")};
  flex: none;
  position: relative;
  &.opened {
    width: 302px;
  }
  &.closed {
    width: 61px;
  }
  z-index: 10;
`;
const PageFrameContent = styled.div`
  flex: 1;
  ${SMixinFlexColumn("stretch", "stretch")};
`;
const Content = styled.div`
  flex: 1;
  overflow: auto;
`;

export default FrameProgram;
