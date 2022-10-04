import * as React from "react";
import { usePageTabStore, PageModel } from "stores";
import { ROUTES } from "router/Routes";

export const getRoutesPath = (paths: string[]) => {
  return ROUTES.ROOT.path + paths.join("/");
};

export function usePageModel<T = Record<string, any>>(paths: string[]) {
  const path = React.useMemo(() => getRoutesPath(paths), [paths]);
  const pages = usePageTabStore((s) => s.pages);
  const updateTab = usePageTabStore((s) => s.updateTab);
  const tabUuid = React.useMemo(() => [...pages].find(([, v]) => v.path === path)?.[0] ?? "", [pages, path]);
  const pageModel = React.useMemo(() => pages.get(tabUuid) ?? ({ label: "" } as PageModel), [pages, tabUuid]);

  const setPageModelMetadata = React.useCallback(
    (metaData: T) => {
      pageModel.metaData = metaData as Record<string, any>;
      updateTab(tabUuid, pageModel);
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
