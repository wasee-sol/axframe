import { AppActions, AppModel } from "./useAppStore";

export type ZustandSetter<T> = (partial: Partial<T>, replace?: boolean | undefined) => void;

export type ZustandGetter<T> = () => T;

export type StoreActions = (set: ZustandSetter<AppModel>, get: ZustandGetter<AppModel>) => AppActions;

export interface DefaultPageStoreActions {
  init: (routePath: string) => void;
  reset: () => void;
  destroy: () => void;
  applyMetadata: (metaData: Record<string, any>) => void;
}
