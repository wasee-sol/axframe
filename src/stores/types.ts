import { State } from 'zustand';
import { AppActions, AppModel } from './useAppStore';

export type ZustandSetter<T extends State> = (
  partial: Partial<T>,
  replace?: boolean | undefined,
) => void;

export type ZustandGetter<T extends State> = () => T;

export type StoreActions = (
  set: ZustandSetter<AppModel>,
  get: ZustandGetter<AppModel>,
) => AppActions;
