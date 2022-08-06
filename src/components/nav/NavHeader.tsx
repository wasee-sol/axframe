import * as React from "react";
import styled from "@emotion/styled";
import { SMixinFlexRow } from "../../styles/emotion";
import { ReactFrameLogo } from "react-frame-icon";
import { css } from "@emotion/react";

interface Props {
  opened: boolean;
}

function NavHeader({ opened }: Props) {
  return (
    <NavHeaderContainer opened={opened}>
      <Logo opened={opened}>
        <ReactFrameLogo fontSize={24} />
        {opened ? "React Frame" : ""}
      </Logo>
      <TabLine />
    </NavHeaderContainer>
  );
}

const NavHeaderContainer = styled.div<Props>`
  position: relative;
  height: 45px;
  padding: 0 32px;
  background: ${(p) => p.theme.header_background};

  ${({ opened }) => {
    if (opened) {
      return css`
        ${SMixinFlexRow("stretch", "center")};
      `;
    }
    return css`
      ${SMixinFlexRow("center", "center")};
    `;
  }}
`;

const Logo = styled.div<Props>`
  column-gap: 6px;
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  color: ${(p) => p.theme.heading_color};

  ${({ opened }) => {
    if (opened) {
      return css`
        ${SMixinFlexRow("stretch", "center")};
      `;
    }
    return css`
      ${SMixinFlexRow("center", "center")};
    `;
  }}
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
