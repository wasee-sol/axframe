import * as React from "react";
import { usePageTabStore, PageModel } from "stores";

export function usePageModel(path: string) {
  const pages = usePageTabStore((s) => s.pages);
  const updateTab = usePageTabStore((s) => s.updateTab);
  const tabUuid = React.useMemo(() => [...pages].find(([, v]) => v.path === path)?.[0] ?? "", [pages, path]);
  const pageModel = React.useMemo(() => pages.get(tabUuid) ?? ({ label: "" } as PageModel), [pages, tabUuid]);

  const setPageModelMetadata = React.useCallback(
    (metaData: Record<string, any>) => {
      pageModel.metaData = metaData;
      updateTab(tabUuid, pageModel);
    },
    [pageModel, tabUuid, updateTab]
  );

  const pageModelMetadata = pageModel.metaData;

  return {
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
  };
}
