import * as React from "react";
import styled from "@emotion/styled";
import { RFIHome, RFIClose } from "react-frame-icon";
import { useTabGroupController } from "../../@controller/tabs/TabGroupController";
import { PageModel } from "../../stores";
import { SMixinFlexRow } from "../../styles/emotion";
import { css } from "@emotion/react";
import { mergeProps } from "../../utils/object";

interface StyleProps {
  isHome?: boolean;
  active?: boolean;
}

interface Props extends StyleProps {
  tabUuid: string;
  tabInfo: PageModel;
}

function TabItem(props: Props) {
  const { activeTabUuid, onClickTab, onClickRemoveTab } = mergeProps(props, useTabGroupController());
  const { tabUuid, tabInfo } = props;

  return (
    <TabItemContainer
      isHome={tabInfo.isHome}
      active={activeTabUuid === tabUuid}
      onClick={() => onClickTab(tabUuid, tabInfo.path)}
      role={activeTabUuid === tabUuid ? "active-tab-item" : "tab-item"}
    >
      {tabInfo.isHome ? (
        <RFIHome fontSize={18} />
      ) : (
        <>
          {tabInfo.label}
          <a
            role='tab-close'
            onClick={(evt) => {
              onClickRemoveTab(tabUuid);
              evt.stopPropagation();
            }}
          >
            <RFIClose />
          </a>
        </>
      )}
    </TabItemContainer>
  );
}

const TabItemContainer = styled.div<StyleProps>`
  ${SMixinFlexRow("flex-start", "center")};
  flex: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 30px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
  position: relative;
  white-space: nowrap;

  [role="tab-close"] {
    position: absolute;
    right: 8px;
    top: 9px;
    line-height: 15px;
  }

  ${({ isHome }) => {
    if (isHome) {
      return css`
        padding: 0 10px;
      `;
    }
    return css`
      min-width: 100px;
      padding: 0 25px 0 10px;
    `;
  }}

  ${({ active, theme }) => {
    if (active) {
      return css`
        color: ${theme.white_color};
        background: ${theme.primary_color};

        [role="tab-close"] {
          color: ${theme.white_color};
        }
      `;
    }
    return css`
      background: #f0f0f0;
      color: ${theme.text_display_color};
    `;
  }}
`;

export default TabItem;
