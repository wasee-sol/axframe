import { AppActions, AppModel } from "./useAppStore";

export type ZustandSetter<T> = (partial: Partial<T>, replace?: boolean | undefined) => void;

export type ZustandGetter<T> = () => T;

export type StoreActions = (set: ZustandSetter<AppModel>, get: ZustandGetter<AppModel>) => AppActions;
