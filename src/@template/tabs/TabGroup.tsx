import { useTabGroupController } from "@controller/tabs/TabGroupController";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import { SortableElement, SortableContainer } from "react-sortable-hoc";
import { PageModel } from "stores";
import { SMixinFlexRow } from "styles/emotion";
import { darken } from "styles/palette/colorUtil";
import { mergeProps } from "utils/object";
import TabItem from "./TabItem";
import TabItemMore from "./TabItemMore";

interface SortableItemProps {
  tabUuid: string;
  pageModel: PageModel;
}

const SortableItem = SortableElement<SortableItemProps>(({ tabUuid, pageModel }) => (
  <TabItem tabUuid={tabUuid} tabInfo={pageModel} />
));

interface SortableListProps {
  scrollerRef: React.RefObject<HTMLDivElement>;
  onWheelScroller: (e: React.WheelEvent) => void;
  pagesValues: [string, PageModel][];
}

const SortableList = SortableContainer<SortableListProps>(({ pagesValues, scrollerRef, onWheelScroller }) => (
  <TabItemsScroller ref={scrollerRef} onWheel={onWheelScroller}>
    {pagesValues.map(([k, v], index) => (
      <SortableItem index={index} key={k} tabUuid={k} pageModel={v} />
    ))}
  </TabItemsScroller>
));

interface Props {}

function TabGroup(props: Props) {
  const { activeTabUuid, pagesValues } = mergeProps(props, useTabGroupController());
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  const onWheelScroller = React.useCallback((e: React.WheelEvent) => {
    if (scrollerRef.current) {
      scrollerRef.current.scroll({
        left: scrollerRef.current.scrollLeft + e.deltaX + e.deltaY,
      });
    }
  }, []);

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

  return (
    <TabGroupContainer>
      <TabLine />
      <TabItemsGroup>
        <SortableList
          axis={"x"}
          lockAxis={"x"}
          distance={10}
          onWheelScroller={onWheelScroller}
          scrollerRef={scrollerRef}
          pagesValues={pagesValues}
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
