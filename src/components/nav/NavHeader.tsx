import * as React from "react";
import styled from "@emotion/styled";
import { SMixinFlexRow } from "../../styles/emotion";
import { ReactFrameLogo } from "react-frame-icon";

interface Props {}

function NavHeader(props: Props) {
  return (
    <NavHeaderContainer>
      <Logo>
        <ReactFrameLogo />
        React Frame
      </Logo>
      <Handle>==</Handle>
    </NavHeaderContainer>
  );
}

const NavHeaderContainer = styled.div`
  ${SMixinFlexRow("stretch", "center")};
`;

const Logo = styled.div`
  ${SMixinFlexRow("stretch", "center")};
`;
const Handle = styled.div``;

export default NavHeader;
