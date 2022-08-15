import * as React from "react";
import TabGroup from "@template/tabs/TabGroup";
import usePageTabStore from "stores/usePageTabStore";
import { useLink } from "hooks/useLink";
import { useI18n } from "../../hooks/useI18n";

export function useTabGroupController() {
  const pages = usePageTabStore((s) => s.pages);
  const addTab = usePageTabStore((s) => s.addTab);
  const removeTab = usePageTabStore((s) => s.removeTab);
  const activeTabUuid = usePageTabStore((s) => s.activeTabUuid);
  const setActiveTab = usePageTabStore((s) => s.setActiveTab);

  const { linkTo } = useLink();
  const { t } = useI18n();

  const onClickTab = React.useCallback(
    (tabUuid: string, path?: string) => {
      if (!path) return;
      setActiveTab(tabUuid);
      linkTo(path);
    },
    [linkTo, setActiveTab]
  );

  const onClickAddTab = React.useCallback(() => {
    const path = "about:blank";
    const addedTabUuid = addTab({
      label: t.pageTab.newTab,
      path,
    });
    setActiveTab(addedTabUuid);
    linkTo(path);
  }, [addTab, t.pageTab.newTab, setActiveTab, linkTo]);

  const onClickRemoveTab = React.useCallback(
    (tabUuid: string) => {
      removeTab(tabUuid);
    },
    [removeTab]
  );

  return {
    pages,
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
