import { useTabGroup } from "@hooks/tabs/useTabGroup";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { TabGroupMenu, TabGroupMenuAction } from "components/contextMenu";
import * as React from "react";
import { ReactSortable } from "react-sortablejs";
import { SMixinFlexRow } from "styles/emotion";
import { darken } from "styles/palette/colorUtil";
import { mergeProps } from "utils/object";
import TabItem from "./TabItem";
import TabItemMore from "./TabItemMore";

interface Props {}

function TabGroup(props: Props) {
  const { activeTabUuid, tabItemList, setPages, handleRemoveTab, handleRemoveOtherTabs, currentLanguage } = mergeProps(
    props,
    useTabGroup()
  );

  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const tabGroupMenu = React.useRef<TabGroupMenu>(new TabGroupMenu());

  const handleWheelScroller = React.useCallback((evt: React.WheelEvent) => {
    if (scrollerRef.current) {
      scrollerRef.current.scroll({
        left: scrollerRef.current.scrollLeft + evt.deltaX + evt.deltaY,
      });
    }
  }, []);

  const handleContextMenu = React.useCallback(
    (evt: React.MouseEvent<HTMLDivElement>, tabUuid: string) => {
      evt.preventDefault();

      tabGroupMenu.current.onClick = ({ action }) => {
        switch (action) {
          case TabGroupMenuAction.CLOSE_TAB:
            handleRemoveTab(tabUuid);
            break;
          case TabGroupMenuAction.CLOSE_OTHER_TABS:
            handleRemoveOtherTabs(tabUuid, "OTHERS");
            break;
          case TabGroupMenuAction.CLOSE_TABS_RIGHT:
            handleRemoveOtherTabs(tabUuid, "TO_RIGHT");
            break;
          case TabGroupMenuAction.REFRESH:
            window.location.reload();
            break;
          default:
            break;
        }
      };

      tabGroupMenu.current.popupByItem(evt);
    },
    [handleRemoveOtherTabs, handleRemoveTab]
  );

  // scroll to activeTab
  React.useEffect(() => {
    const refCurrent = scrollerRef.current;
    if (refCurrent) {
      const scrollMargin = 20;
      const activeTabEl = refCurrent.querySelector("[role='active-tab-item']");
      if (!activeTabEl) return;

      const scrollerScrollLeft = refCurrent.scrollLeft;
      const { left: scrollerLeft, right: scrollerRight } = refCurrent.getBoundingClientRect();
      const { left: activeTabLeft, right: activeTabRight } = activeTabEl.getBoundingClientRect();

      if (scrollerRight < activeTabRight) {
        refCurrent.scrollLeft = scrollerScrollLeft + activeTabRight - scrollerRight + scrollMargin;
      } else if (scrollerLeft > activeTabLeft) {
        refCurrent.scrollLeft = scrollerScrollLeft - Math.abs(scrollerLeft - activeTabLeft) - scrollMargin;
      }
    }
  }, [activeTabUuid]);

  React.useEffect(() => {
    tabGroupMenu.current.language = currentLanguage;
  }, [currentLanguage]);

  return (
    <TabGroupContainer>
      <TabLine />
      <TabItemsGroup>
        <TabItemsScroller ref={scrollerRef} onWheel={handleWheelScroller}>
          <ReactSortable
            animation={300}
            delayOnTouchOnly
            delay={30}
            list={tabItemList}
            setList={(newState) => {
              setPages?.(newState.map((tabItem) => [tabItem.id, tabItem.pageModel]));
            }}
            onEnd={(evt) => {
              evt.item.click();
            }}
          >
            {tabItemList.map((tabItem, index) => (
              <TabItem key={index} tabUuid={tabItem.id} tabInfo={tabItem.pageModel} onContextMenu={handleContextMenu} />
            ))}
          </ReactSortable>
        </TabItemsScroller>
        <TabItemMore />
      </TabItemsGroup>
    </TabGroupContainer>
  );
}

const TabGroupContainer = styled.div`
  flex: none;
  position: relative;
  height: 45px;
  background: ${(p) => p.theme.header_background};
  overflow: hidden;
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
  ${SMixinFlexRow("stretch", "center")};
  position: absolute;
  bottom: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
`;

const TabItemsScroller = styled.div`
  position: relative;
  flex: 1;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0 0 0 10px;

  ${({ theme }) => css`
    &::-webkit-scrollbar {
      width: 3px;
      height: 3px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${darken(theme.primary_color, 0.4)};
      border-radius: 0;
      border: 0 none;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${darken(theme.primary_color, 0.6)};
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: ${theme.primary_color};
    }

    &::-webkit-scrollbar-track:vertical {
      background-color: ${theme.primary_color};
    }

    &::-webkit-scrollbar-track:horizontal {
      background-color: ${theme.primary_color};
    }

    &::-webkit-scrollbar-corner {
      background-color: ${theme.primary_color};
    }
  `}
  > div {
    ${SMixinFlexRow("flex-start", "flex-end")};
    display: flex;
    flex: 1;
    column-gap: 2px;
    position: relative;

    &:after {
      display: block;
      content: "";
      width: 20px;
      height: 30px;
      flex: none;
    }
  }
`;

export default TabGroup;
