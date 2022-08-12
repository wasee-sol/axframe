import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import { ReactFrameLogo, RFIArrowRight, RFIMenuFold } from "react-frame-icon";
import { SMixinFlexRow } from "styles/emotion";
import IconText from "../common/IconText";

interface Props {
  opened: boolean;
  onChangeSideMenuOpened?: (opened: boolean) => void;
}

function NavHeader({ opened, onChangeSideMenuOpened }: Props) {
  return (
    <NavHeaderContainer opened={opened}>
      <Logo opened={opened}>
        <ReactFrameLogo fontSize={24} />
        {opened ? "React Frame" : ""}
      </Logo>
      <ToggleHandle role={"toggle-menu"}>
        {opened ? (
          <IconText
            role={"toggle-icon"}
            icon={<RFIMenuFold fontSize={18} />}
            onClick={() => onChangeSideMenuOpened?.(false)}
          />
        ) : (
          <IconText
            role={"toggle-icon"}
            icon={<RFIArrowRight fontSize={18} />}
            onClick={() => onChangeSideMenuOpened?.(true)}
            block
          />
        )}
      </ToggleHandle>
      {opened && <TabLine />}
    </NavHeaderContainer>
  );
}

const NavHeaderContainer = styled.div<Props>`
  position: relative;
  height: 45px;
  background: ${(p) => p.theme.header_background};
  line-height: 1.1;

  ${({ opened, theme }) => {
    if (opened) {
      return css`
        ${SMixinFlexRow("stretch", "center")};
        padding: 0 32px;
      `;
    }
    return css`
      ${SMixinFlexRow("center", "center")};
      height: 60px;
      padding: 0;

      [role="toggle-menu"] {
        position: absolute;
        right: -10px;
        top: 20px;
        width: 20px;
        height: 20px;
        background: ${theme.border_color_base};
        color: ${theme.text_heading_color};
        border-radius: 50%;
        ${SMixinFlexRow("center", "center")};
        cursor: pointer;
      }
    `;
  }}
`;

const Logo = styled.div<Props>`
  column-gap: 6px;
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  color: ${(p) => p.theme.text_heading_color};

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

const ToggleHandle = styled.div`
  ${SMixinFlexRow("center", "center")};

  [role="toggle-icon"] {
    column-gap: 0;
  }
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
