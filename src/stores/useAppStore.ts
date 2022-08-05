import * as LZUTF8 from "lzutf8";
import buildStore from "stores/buildStore";
import { StoreActions } from "stores/types";
import { ThemeType } from "styles/theme";
import { useTab01Store } from "stores/pages";

export interface AppModel {
  loaded: boolean;
  language: string;
  theme: ThemeType;
  sideMenuOpened: boolean;
}

export interface AppActions {
  setLanguage: (language: string) => void;
  setTheme: (theme: ThemeType) => void;
  setLoaded: (loaded: boolean) => void;
}

export interface AppStore extends AppModel, AppActions {}

export const appInitialState: AppModel = {
  loaded: false,
  language: "ko",
  theme: "light",
  sideMenuOpened: true,
};

const getAppStoreActions: StoreActions = (set, get) => ({
  setLanguage: (language: string) => set({ language }),
  setTheme: (theme: ThemeType) => set({ theme }),
  setLoaded: (loaded: boolean) => set({ loaded }),
});

export const useAppStore = buildStore<AppStore>("app", (set, get) => ({
  ...appInitialState,
  ...getAppStoreActions(set, get),
}));

useAppStore.persist.onFinishHydration((state) => {
  if (!state.loaded) {
    state.setLoaded(true);
  }
});

useAppStore.persist.setOptions({
  migrate: (persistedState) => {
    return { ...(persistedState as AppStore), ...appInitialState };
  },
});
