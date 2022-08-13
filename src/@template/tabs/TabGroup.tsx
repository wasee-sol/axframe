import * as React from "react";
import styled from "@emotion/styled";
import { useTabGroupController } from "@controller/tabs/TabGroupController";
import { mergeProps } from "utils/object";

interface Props {}

function TabGroup(props: Props) {
  const {} = mergeProps(props, useTabGroupController());

  return (
    <TabGroupContainer>
      TabGroup
      <TabLine />
    </TabGroupContainer>
  );
}

const TabGroupContainer = styled.div`
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

export default TabGroup;
