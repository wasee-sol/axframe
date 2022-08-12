import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Tooltip } from "antd";
import * as React from "react";
import { ReactFrameLogo, RFIMenuFold, RFIMenuUnfold } from "react-frame-icon";
import { SMixinFlexColumn, SMixinFlexRow } from "styles/emotion";
import { useNavGroupController } from "../../@controller/nav/NavGroupController";
import { useI18n } from "../../hooks/useI18n";
import IconText from "../common/IconText";

interface Props {
  opened?: boolean;
}

function NavHeader({ opened: _opened }: Props) {
  const { t } = useI18n();
  const { handleSetSideMenuOpened: onChangeSideMenuOpened, sideMenuOpened } = useNavGroupController();
  const opened = _opened ?? sideMenuOpened;

  return (
    <NavHeaderContainer opened={opened}>
      <Logo opened={opened}>
        {opened ? (
          <ReactFrameLogo fontSize={24} />
        ) : (
          <Tooltip title={t.appName} placement={"right"}>
            <ReactFrameLogo fontSize={30} />
          </Tooltip>
        )}
        {opened ? t.appName : ""}
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
            icon={<RFIMenuUnfold fontSize={18} />}
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

  ${({ opened }) => {
    if (opened) {
      return css`
        ${SMixinFlexRow("stretch", "center")};
        padding: 0 32px;
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
  width: calc(100% + 1px);
  bottom: 0;
  left: 0;
  background: ${(p) => p.theme.primary_color};
`;

export default NavHeader;
