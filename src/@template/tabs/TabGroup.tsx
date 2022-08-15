import * as React from "react";
import styled from "@emotion/styled";
import { RFIAdd, RFIHome } from "react-frame-icon";
import { mergeProps } from "utils/object";
import { useTabGroupController } from "@controller/tabs/TabGroupController";
import { css } from "@emotion/react";
import { SMixinFlexColumn, SMixinFlexRow } from "../../styles/emotion";

interface Props {}
interface TabItemProps {
  isHome?: boolean;
  active: boolean;
}

function TabGroup(props: Props) {
  const { pages, activeTabUuid, onClickTab, onClickAddTab } = mergeProps(props, useTabGroupController());

  return (
    <TabGroupContainer>
      <TabItemsGroup>
        {pages &&
          [...pages.entries()].map(([k, v]) => {
            return (
              <TabItem key={k} isHome={v.isHome} active={activeTabUuid === k} onClick={() => onClickTab(k, v.path)}>
                {v.isHome ? <RFIHome fontSize={18} /> : v.label}
              </TabItem>
            );
          })}
        <AddTab onClick={onClickAddTab}>
          <RFIAdd />
        </AddTab>
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
  ${SMixinFlexRow("flex-start", "flex-end")};
  column-gap: 2px;
  padding: 0 0 0 10px;
`;

const TabItem = styled.div<TabItemProps>`
  ${SMixinFlexColumn("center", "center")};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 30px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  user-select: none;

  ${({ isHome }) => {
    if (isHome) {
      return css`
        padding: 0 10px;
      `;
    }
    return css`
      padding: 0 20px 0 10px;
    `;
  }}

  ${({ active, theme }) => {
    if (active) {
      return css`
        color: ${theme.white_color};
        background: ${theme.primary_color};
      `;
    }
    return css`
      background: #f0f0f0;
      color: ${theme.text_display_color};
    `;
  }}
`;

const AddTab = styled.div`
  ${SMixinFlexColumn("center", "center")};
  position: relative;
  cursor: pointer;
  padding: 0 10px;
  font-size: 16px;
  color: ${(p) => p.theme.primary_color};

  width: 25px;
  height: 25px;
  margin-bottom: 2.5px;
  margin-left: 2.5px;
  border-radius: 5px;

  &:hover {
    background: ${(p) => p.theme.border_color_base};
  }
`;

export default TabGroup;
