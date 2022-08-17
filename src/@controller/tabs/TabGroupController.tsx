import * as React from "react";
import TabGroup from "@template/tabs/TabGroup";
import { useLocation } from "react-router-dom";
import usePageTabStore from "stores/usePageTabStore";
import { useLink, useI18n } from "hooks";

export function useTabGroupController() {
  const pages = usePageTabStore((s) => s.pages);
  const addTab = usePageTabStore((s) => s.addTab);
  const removeTab = usePageTabStore((s) => s.removeTab);
  const activeTabUuid = usePageTabStore((s) => s.activeTabUuid);
  const getActiveTabPage = usePageTabStore((s) => s.getActiveTabPage);

  const location = useLocation();
  const { linkTo } = useLink();
  const { t } = useI18n();

  const onClickTab = React.useCallback(
    (tabUuid: string, path?: string) => {
      if (!path) return;
      linkTo(path);
    },
    [linkTo]
  );

  const onClickAddTab = React.useCallback(() => {
    const path = "about:blank";
    addTab({
      label: t.pageTab.newTab,
      path,
    });
    linkTo(path);
  }, [addTab, t.pageTab.newTab, linkTo]);

  const onClickRemoveTab = React.useCallback(
    (tabUuid: string) => {
      removeTab(tabUuid);
      const activePageInfo = getActiveTabPage();
      if (activePageInfo.page.path && activePageInfo.page.path !== location.pathname) {
        linkTo(activePageInfo.page.path);
      }
    },
    [getActiveTabPage, linkTo, location.pathname, removeTab]
  );

  return {
    pagesValues: [...pages.entries()],
    activeTabUuid,
    onClickTab,
    onClickAddTab,
    onClickRemoveTab,
  };
}

function TabGroupController() {
  return <TabGroup />;
}

export default TabGroupController;
