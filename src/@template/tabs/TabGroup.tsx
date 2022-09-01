import { useTabGroupController } from "@controller/tabs/TabGroupController";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { TabGroupMenu, TabGroupMenuAction } from "components/contextMenu";
import * as React from "react";
import { SortableElement, SortableContainer } from "react-sortable-hoc";
import { PageModel } from "stores";
import { SMixinFlexRow } from "styles/emotion";
import { darken } from "styles/palette/colorUtil";
import { mergeProps } from "utils/object";
import { arrayMove } from "utils/array";
import TabItem from "./TabItem";
import TabItemMore from "./TabItemMore";

interface SortableItemProps {
  tabUuid: string;
  pageModel: PageModel;
  onContextMenu: (e: React.MouseEvent<HTMLDivElement>, tabUuid: string) => void;
}

const SortableItem = SortableElement<SortableItemProps>(({ tabUuid, pageModel, onContextMenu }) => (
  <TabItem tabUuid={tabUuid} tabInfo={pageModel} onContextMenu={onContextMenu} />
));

interface SortableListProps {
  scrollerRef: React.RefObject<HTMLDivElement>;
  onWheelScroller: (e: React.WheelEvent) => void;
  pagesValues: [string, PageModel][];
  onContextMenu: (e: React.MouseEvent<HTMLDivElement>, tabUuid: string) => void;
}

const SortableList = SortableContainer<SortableListProps>(
  ({ pagesValues, scrollerRef, onWheelScroller, onContextMenu }) => (
    <TabItemsScroller ref={scrollerRef} onWheel={onWheelScroller}>
      {pagesValues.map(([k, v], index) => (
        <SortableItem index={index} key={k} tabUuid={k} pageModel={v} onContextMenu={onContextMenu} />
      ))}
    </TabItemsScroller>
  )
);

interface Props {}

function TabGroup(props: Props) {
  const { activeTabUuid, pagesValues, setPages, handleRemoveTab, handleRemoveOtherTabs, currentLanguage } = mergeProps(
    props,
    useTabGroupController()
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

  const handleSortEnd = React.useCallback(
    ({ oldIndex, newIndex }) => {
      setPages?.(arrayMove(pagesValues.slice(), oldIndex, newIndex));
    },
    [pagesValues, setPages]
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
        <SortableList
          axis={"x"}
          lockAxis={"x"}
          distance={20}
          onWheelScroller={handleWheelScroller}
          scrollerRef={scrollerRef}
          pagesValues={pagesValues}
          onContextMenu={handleContextMenu}
          onSortEnd={handleSortEnd}
        />
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
  ${SMixinFlexRow("flex-start", "flex-end")};
  flex: 1;
  column-gap: 2px;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0 20px 0 10px;
  position: relative;
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
`;

export default TabGroup;
