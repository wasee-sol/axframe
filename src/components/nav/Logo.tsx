import styled from "@emotion/styled";
import * as React from "react";
import { useAppStore } from "stores";
import { SMixinFlexColumn } from "@core/styles/emotion";
import { User } from "services";
import { css } from "@emotion/react";
import { AXFrameLogo } from "@axframe/icon";

interface StyleProps {
  sideMenuOpened?: boolean;
}
interface Props extends StyleProps {
  me?: User;
  onSignOut?: () => Promise<void>;
}

function Logo({}: Props) {
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);

  return (
    <Container sideMenuOpened={sideMenuOpened}>
      {/*<TabLine />*/}
      <AXFrameLogoOpened sideMenuOpened={sideMenuOpened}>{!sideMenuOpened && <AXFrameLogo />}</AXFrameLogoOpened>
    </Container>
  );
}

const Container = styled.div<StyleProps>`
  flex: none;
  width: ${(p) => p.theme.side_menu_open_width}px;
  padding: 16px;
  overflow: hidden;
  position: relative;

  ${({ sideMenuOpened }) => {
    if (!sideMenuOpened) {
      return css`
        width: 96px;
      `;
    }
  }}
`;
const AXFrameLogoOpened = styled.div<StyleProps>`
  ${SMixinFlexColumn("center", "center")};
  width: 100%;
  height: 36px;
  background: url("/logo.png") no-repeat center center;
  background-size: 164px;
  ${({ sideMenuOpened }) => {
    if (!sideMenuOpened) {
      return css`
        background: none;
        width: 64px;
        font-size: 30px;
      `;
    }
  }}
`;

export default Logo;
