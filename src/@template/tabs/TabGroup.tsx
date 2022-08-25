import * as React from "react";
import styled from "@emotion/styled";
import { RFIHome, RFIClose, RFIArrowDown } from "react-frame-icon";
import { mergeProps } from "utils/object";
import { useTabGroupController } from "@controller/tabs/TabGroupController";
import { css } from "@emotion/react";
import { SMixinFlexRow } from "styles/emotion";

interface Props {}

interface TabItemProps {
  isHome?: boolean;
  active: boolean;
}

function TabGroup(props: Props) {
  const { pagesValues, activeTabUuid, onClickTab, onClickRemoveTab } = mergeProps(props, useTabGroupController());

  return (
    <TabGroupContainer>
      <TabItemsGroup>
        <TabItemsScroller>
          {pagesValues.map(([k, v]) => {
            return (
              <TabItem key={k} isHome={v.isHome} active={activeTabUuid === k} onClick={() => onClickTab(k, v.path)}>
                {v.isHome ? (
                  <RFIHome fontSize={18} />
                ) : (
                  <>
                    {v.label}
                    <a
                      role='tab-close'
                      onClick={(evt) => {
                        onClickRemoveTab(k);
                        evt.stopPropagation();
                      }}
                    >
                      <RFIClose />
                    </a>
                  </>
                )}
              </TabItem>
            );
          })}
        </TabItemsScroller>
        <TabItemsMore>
          <RFIArrowDown />
        </TabItemsMore>
      </TabItemsGroup>
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

const TabItemsGroup = styled.div`
  position: absolute;
  bottom: 3px;
  padding: 0 0 0 10px;
  ${SMixinFlexRow("stretch", "center")};
`;

const TabItem = styled.div<TabItemProps>`
  ${SMixinFlexRow("flex-start", "center")};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 30px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
  position: relative;

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

const TabItemsScroller = styled.div`
  ${SMixinFlexRow("flex-start", "flex-end")};
  column-gap: 2px;
`;
const TabItemsMore = styled.div`
  ${SMixinFlexRow("center", "center")};
  width: 40px;
`;

export default TabGroup;
