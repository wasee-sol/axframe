import * as React from "react";
import styled from "@emotion/styled";
import { SMixinFlexRow } from "../../styles/emotion";
import { ReactFrameLogo, RFIMenuFold, RFIMenuUnfold } from "react-frame-icon";

interface Props {}

function NavHeader(props: Props) {
  return (
    <NavHeaderContainer>
      <Logo>
        <ReactFrameLogo fontSize={24} />
        React Frame
      </Logo>
      <TabLine />
    </NavHeaderContainer>
  );
}

const NavHeaderContainer = styled.div`
  position: relative;
  ${SMixinFlexRow("stretch", "center")};
  height: 45px;
  padding: 0 32px;
  border-right: 1px solid ${(p) => p.theme.border_color_base};
  background: ${(p) => p.theme.header_background};
`;

const Logo = styled.div`
  ${SMixinFlexRow("stretch", "center")};
  column-gap: 6px;
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  color: ${(p) => p.theme.heading_color};
`;

const TabLine = styled.div`
  position: absolute;
  height: 3px;
  width: 100%;
  bottom: 0;
  left: 0;
  background: ${(p) => p.theme.primary_color};
`;

export default NavHeader;
