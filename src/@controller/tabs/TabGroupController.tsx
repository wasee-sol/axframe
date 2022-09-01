import * as React from "react";
import TabGroup from "@template/tabs/TabGroup";
import { useLocation } from "react-router-dom";
import { usePageTabStore } from "stores";
import { useLink, useI18n } from "hooks";

export function useTabGroupController() {
  const pages = usePageTabStore((s) => s.pages);
  const setPages = usePageTabStore((s) => s.setPages);
  const addTab = usePageTabStore((s) => s.addTab);
  const removeTab = usePageTabStore((s) => s.removeTab);
  const removeTabs = usePageTabStore((s) => s.removeTabs);
  const activeTabUuid = usePageTabStore((s) => s.activeTabUuid);
  const getActiveTabPage = usePageTabStore((s) => s.getActiveTabPage);

  const location = useLocation();
  const { linkTo } = useLink();
  const { t, currentLanguage } = useI18n();

  const handleClickTab = React.useCallback(
    (tabUuid: string, path?: string) => {
      if (!path) return;
      linkTo(path);
    },
    [linkTo]
  );

  const handleAddTab = React.useCallback(() => {
    const path = "about:blank";
    addTab({
      label: t.pageTab.newTab,
      path,
    });
    linkTo(path);
  }, [addTab, t.pageTab.newTab, linkTo]);

  const handleRemoveTab = React.useCallback(
    (tabUuid: string) => {
      removeTab(tabUuid);
      const activePageInfo = getActiveTabPage();
      if (activePageInfo.page.path && activePageInfo.page.path !== location.pathname) {
        linkTo(activePageInfo.page.path);
      }
    },
    [getActiveTabPage, linkTo, location.pathname, removeTab]
  );

  const handleRemoveOtherTabs = React.useCallback(
    (tabUuid: string, removeType: "OTHERS" | "TO_RIGHT") => {
      const pagesValues = [...pages];

      if (removeType === "OTHERS") {
        const removeTabUuids = pagesValues.filter(([k, v]) => !v.isHome && k !== tabUuid).map(([k]) => k);
        removeTabs(removeTabUuids);
      } else {
        const tabIndex = pagesValues.findIndex(([k]) => k === tabUuid);
        const removeTabUuids = pagesValues
          .slice(tabIndex + 1)
          .filter(([k, v]) => !v.isHome && k !== tabUuid)
          .map(([k]) => k);

        removeTabs(removeTabUuids);
      }

      const activePageInfo = getActiveTabPage();
      if (activePageInfo.page.path && activePageInfo.page.path !== location.pathname) {
        linkTo(activePageInfo.page.path);
      }
    },
    [getActiveTabPage, linkTo, location.pathname, pages, removeTabs]
  );

  return {
    setPages,
    pagesValues: [...pages],
    activeTabUuid,
    handleClickTab,
    handleAddTab,
    handleRemoveTab,
    handleRemoveOtherTabs,
    currentLanguage,
  };
}

function TabGroupController() {
  return <TabGroup />;
}

export default TabGroupController;
