import { useState, useEffect } from "react";
import { usePageTabStore, PageModel } from "stores";

export function usePageModel() {
  const activeTabUuid = usePageTabStore((s) => s.activeTabUuid);
  const getActiveTabPage = usePageTabStore((s) => s.getActiveTabPage);
  const [pageModel, setPageModel] = useState<PageModel>({ label: "" });

  useEffect(() => {
    const { page } = getActiveTabPage();
    setPageModel(page);
  }, [activeTabUuid, getActiveTabPage]);

  return {
    pageModel,
  };
}
