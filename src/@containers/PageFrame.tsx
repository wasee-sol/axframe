import NavGroup from "@containers/nav/NavGroup";
import styled from "@emotion/styled";
import * as React from "react";
import { useAppStore } from "stores";
import { SMixinFlexRow } from "styles/emotion";

interface Props {
  children?: React.ReactNode;
}
function PageFrame(props: Props) {
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);

  return (
    <PageFrameContainer>
      <PageFrameNav className={sideMenuOpened ? "opened" : "closed"}>
        <NavGroup opened={sideMenuOpened} />
      </PageFrameNav>
      <PageFrameContent>{props.children}</PageFrameContent>
    </PageFrameContainer>
  );
}

const PageFrameContainer = styled.div`
  ${SMixinFlexRow("stretch", "stretch")};
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

export default PageFrame;
