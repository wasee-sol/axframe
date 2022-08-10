import styled from "@emotion/styled";
import * as React from "react";
import { SMixinFlexRow } from "styles/emotion";

interface Props {
  children?: React.ReactNode;
}

function FrameDefault({ children }: Props) {
  return (
    <PageFrameContainer>
      <PageFrameContent>{children}</PageFrameContent>
    </PageFrameContainer>
  );
}

const PageFrameContainer = styled.div`
  ${SMixinFlexRow("stretch", "stretch")};
  flex: 1;
`;

const PageFrameContent = styled.div`
  flex: 1;
  overflow: auto;
`;

export default FrameDefault;
