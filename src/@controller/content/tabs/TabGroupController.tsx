import * as React from "react";
import styled from "@emotion/styled";

interface Props {}

function TabGroupController(props: Props) {
  return (
    <TabGroupControllerContainer>
      TabGroupController
      <TabLine />
    </TabGroupControllerContainer>
  );
}

const TabGroupControllerContainer = styled.div`
  flex: none;
  position: relative;
  height: 45px;
  background: ${(p) => p.theme.header_background};
`;

const TabLine = styled.div`
  position: absolute;
  height: 3px;
  width: 100%;
  bottom: 0;
  left: 0;
  background: ${(p) => p.theme.primary_color};
`;

export default TabGroupController;
