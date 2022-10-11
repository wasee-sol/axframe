import * as React from "react";
import styled from "@emotion/styled";
import { RFIHome, RFIClose } from "react-frame-icon";
import { useTabGroup } from "@hooks/tabs/useTabGroup";
import { PageModel } from "stores";
import { SMixinFlexRow } from "styles/emotion";
import { css } from "@emotion/react";
import { darken } from "styles/palette/colorUtil";
import { mergeProps } from "utils/object";

interface StyleProps {
  isHome?: boolean;
  active?: boolean;
}

interface Props extends StyleProps {
  tabUuid: string;
  tabInfo: PageModel;
  onContextMenu: (e: React.MouseEvent<HTMLDivElement>, tabUuid: string) => void;
}

function TabItem(props: Props) {
  const { activeTabUuid, handleClickTab, handleRemoveTab, currentLanguage } = mergeProps(props, useTabGroup());
  const { tabUuid, tabInfo } = props;

  return (
    <TabItemContainer
      isHome={tabInfo.isHome}
      active={activeTabUuid === tabUuid}
      onClick={() => handleClickTab(tabUuid, tabInfo.path)}
      role={activeTabUuid === tabUuid ? "active-tab-item" : "tab-item"}
      onContextMenu={(evt) => props.onContextMenu(evt, tabUuid)}
    >
      {tabInfo.isHome ? (
        <RFIHome fontSize={18} />
      ) : (
        <>
          {tabInfo.labels?.[currentLanguage] ?? ""}
          <a
            role='tab-close'
            onClick={(evt) => {
              handleRemoveTab(tabUuid);
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
    display: block;
    right: 8px;
    top: 7px;
    padding: 2px;
    border-radius: 50%;

    svg {
      display: block;
    }
  }

  ${({ isHome }) => {
    if (isHome) {
      return css`
        padding: 0 10px;
      `;
    }
    return css`
      min-width: 100px;
      padding: 0 30px 0 10px;
    `;
  }}
  ${({ active, theme }) => {
    if (active) {
      return css`
        color: ${theme.white_color};
        background: ${theme.rf_tabs_active_background};

        [role="tab-close"] {
          color: ${theme.white_color};

          &:hover {
            background: ${theme.white_color};
            color: ${theme.rf_tabs_active_background};
          }
        }
      `;
    }
    return css`
      background: ${theme.rf_tabs_background};
      color: ${theme.text_display_color};

      &:hover {
        background: ${theme.rf_tabs_hover_background};
      }

      [role="tab-close"] {
        &:hover {
          background: ${theme.white_color};
          color: ${theme.rf_tabs_active_background};
        }
      }
    `;
  }}
  &.sortable-ghost {
    color: ${(p) => p.theme.white_color};
    background: ${(p) => darken(p.theme.rf_tabs_active_background, 0.6)};
  }
`;

export default TabItem;
