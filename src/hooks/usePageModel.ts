import * as React from "react";
import { usePageTabStore, PageModel } from "stores";

export function usePageModel<T = Record<string, any>>(path: string) {
  const pages = usePageTabStore((s) => s.pages);
  const updateTab = usePageTabStore((s) => s.updateTab);
  const tabUuid = React.useMemo(() => [...pages].find(([, v]) => v.path === path)?.[0] ?? "", [pages, path]);
  const pageModel = React.useMemo(
    () =>
      pages.get(tabUuid) ??
      ({
        labels: {
          en: "",
          ko: "",
        },
      } as PageModel),
    [pages, tabUuid]
  );

  const setPageModelMetadata = React.useCallback(
    (metaData: T) => {
      if (pageModel && tabUuid) {
        pageModel.metaData = metaData as Record<string, any>;
        updateTab(tabUuid, pageModel);
      }
    },
    [pageModel, tabUuid, updateTab]
  );

  const pageModelMetadata = pageModel.metaData as T;

  return {
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
  };
}
