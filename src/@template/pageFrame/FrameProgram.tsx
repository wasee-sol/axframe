import NavGroupController from "@controller/nav/NavGroupController";
import styled from "@emotion/styled";
import * as React from "react";
import { Outlet } from "react-router-dom";
import { SMixinFlexRow } from "styles/emotion";

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
        <Outlet />
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
  &.opened {
    width: 302px;
  }
  &.closed {
    width: 60px;
  }
`;
const PageFrameContent = styled.div`
  flex: 1;
  overflow: auto;
`;

export default FrameProgram;
