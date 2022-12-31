export type ZustandSetter<T> = (partial: Partial<T>, replace?: boolean | undefined) => void;

export type ZustandGetter<T> = () => T;

export type StoreActions<T, R> = (set: ZustandSetter<T>, get: ZustandGetter<T>) => R;

export interface PageStoreActions {
  syncMetadata: (metaData?: Record<string, any>) => void;
  init: (routePath: string) => void;
  reset: () => void;
  destroy: () => void;
}
