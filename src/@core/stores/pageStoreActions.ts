import { getMetaDataByPath, setMetaDataByPath } from "./usePageTabStore";

export const pageStoreActions = (set, get, unSubscribe) => ({
  init: async (routePath) => {
    const metaData = getMetaDataByPath(routePath);
    if (metaData) get().syncMetadata(metaData);

    set({ routePath });
  },
  reset: async () => {
    const routePath = get().routePath;
    if (!routePath) return;

    setMetaDataByPath(routePath, {});
    get().syncMetadata();
  },
  destroy: () => {
    unSubscribe();
  },
});
