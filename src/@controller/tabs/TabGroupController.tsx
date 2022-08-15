import * as React from "react";
import TabGroup from "@template/tabs/TabGroup";
import usePageTabStore from "stores/usePageTabStore";
import { useLink } from "hooks/useLink";

export function useTabGroupController() {
  const pages = usePageTabStore((s) => s.pages);
  const addTab = usePageTabStore((s) => s.addTab);
  const removeTab = usePageTabStore((s) => s.removeTab);
  const activeTabUuid = usePageTabStore((s) => s.activeTabUuid);
  const setActiveTab = usePageTabStore((s) => s.setActiveTab);

  const { linkTo } = useLink();
  const onClickTab = React.useCallback(
    (tabUuid: string, path: string) => {
      linkTo(path);
      setActiveTab(tabUuid);
    },
    [linkTo, setActiveTab]
  );

  return {
    pages,
    addTab,
    removeTab,
    activeTabUuid,
    setActiveTab,
    onClickTab,
  };
}

function TabGroupController() {
  return <TabGroup />;
}

export default TabGroupController;
