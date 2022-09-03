import * as React from "react";
import moment from "moment";
import { usePageTabStore, PageModel } from "stores";

export function usePageModel(path: string) {
  const pages = usePageTabStore((s) => s.pages);
  const tabUuid = React.useMemo(() => [...pages].find(([, v]) => v.path === path)?.[0] ?? "", [pages, path]);
  const pageModel = React.useMemo(() => pages.get(tabUuid) ?? ({ label: "" } as PageModel), [pages, tabUuid]);

  const setPageModelMetadata = React.useCallback(
    (metaData: Record<string, any>) => {
      pageModel.metaData = metaData;
    },
    [pageModel]
  );

  const pageModelMetadata = React.useMemo(() => {
    for (const metaDataKey in pageModel.metaData) {
      if (moment(pageModel.metaData[metaDataKey], moment.ISO_8601, true).isValid()) {
        pageModel.metaData[metaDataKey] = moment(pageModel.metaData[metaDataKey]);
      }
    }

    return pageModel.metaData;
  }, [pageModel.metaData]);

  return {
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
  };
}
