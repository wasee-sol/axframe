import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Tooltip } from "antd";
import * as React from "react";
import { ReactFrameLogo, RFIMenuFold, RFIMenuUnfold } from "react-frame-icon";
import { SMixinFlexColumn, SMixinFlexRow } from "styles/emotion";
import { useNavGroup } from "@hooks/nav/useNavGroup";
import { useI18n } from "hooks/useI18n";
import { mergeProps } from "utils/object";
import { IconText } from "components/common";

interface Props {
  sideMenuOpened?: boolean;
  onChangeSideMenuOpened?: (opened: boolean) => void;
}

function NavHeader(props: Props) {
  const { sideMenuOpened, handleSetSideMenuOpened } = mergeProps(props, useNavGroup());
  const { t } = useI18n();
  return (
    <NavHeaderContainer sideMenuOpened={sideMenuOpened}>
      <Logo sideMenuOpened={sideMenuOpened}>
        {sideMenuOpened ? (
          <ReactFrameLogo fontSize={24} />
        ) : (
          <Tooltip title={t.appName} placement={"right"}>
            <ReactFrameLogo fontSize={30} />
          </Tooltip>
        )}
        {sideMenuOpened ? t.appName : ""}
      </Logo>
      <ToggleHandle role={"toggle-menu"}>
        {sideMenuOpened ? (
          <IconText
            role={"toggle-icon"}
            icon={<RFIMenuFold fontSize={18} />}
            onClick={() => handleSetSideMenuOpened?.(false)}
          />
        ) : (
          <IconText
            role={"toggle-icon"}
            icon={<RFIMenuUnfold fontSize={18} />}
            onClick={() => handleSetSideMenuOpened?.(true)}
            block
          />
        )}
      </ToggleHandle>
      {sideMenuOpened && <TabLine />}
    </NavHeaderContainer>
  );
}

const NavHeaderContainer = styled.div<Props>`
  position: relative;
  height: 45px;
  background: ${(p) => p.theme.header_background};
  line-height: 1.1;

  ${({ sideMenuOpened }) => {
    if (sideMenuOpened) {
      return css`
        ${SMixinFlexRow("stretch", "center")};
        padding: 0 20px;
      `;
    }
    return css`
      ${SMixinFlexColumn("center", "center")};
      height: 70px;
      padding: 0;

      [role="toggle-menu"] {
        ${SMixinFlexRow("center", "center")};
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

  ${({ sideMenuOpened }) => {
    if (sideMenuOpened) {
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
  width: calc(100% + 1px);
  bottom: 0;
  left: 0;
  background: ${(p) => p.theme.primary_color};
`;

export default NavHeader;
