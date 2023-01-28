import buildStore from "@core/stores/buildStore";
import { StoreActions } from "@core/stores/types";
import { ThemeType } from "styles/theme";
import { LanguageType } from "i18n";
import { AppMenuGroup, AppService } from "../services";

export interface AppModel {
  loaded: boolean;
  currentLanguage: LanguageType;
  theme: ThemeType;
  sideMenuOpened: boolean;
  width: number;
  height: number;
  appMenuGroups: AppMenuGroup[];
  appMenuGroupSpinning: boolean;
}

export interface AppActions {
  setLanguage: (language: LanguageType) => void;
  setTheme: (theme: ThemeType) => void;
  setLoaded: (loaded: boolean) => void;
  setSideMenuOpened: (sideMenuOpened: boolean) => void;
  setWidthHeight: (width: number, height: number) => void;
  callAppMenu: () => Promise<void>;
}

export interface AppStore extends AppModel, AppActions {}

export const appInitialState: AppModel = {
  loaded: false,
  currentLanguage: "ko",
  theme: "light",
  sideMenuOpened: true,
  width: 0,
  height: 0,
  appMenuGroups: [],
  appMenuGroupSpinning: false,
};

const getAppStoreActions: StoreActions<AppModel & AppActions, AppActions> = (set, get) => ({
  setLanguage: (language: LanguageType) => set({ currentLanguage: language }),
  setTheme: (theme: ThemeType) => set({ theme }),
  setLoaded: (loaded: boolean) => set({ loaded }),
  setSideMenuOpened: (sideMenuOpened: boolean) => set({ sideMenuOpened }),
  setWidthHeight: (width, height) => set({ width, height }),
  callAppMenu: async () => {
    set({ appMenuGroupSpinning: true });
    try {
      const data = await AppService.getAppMenu({});
      set({ appMenuGroups: data.ds });
    } catch (e) {
    } finally {
      set({ appMenuGroupSpinning: false });
    }
  },
});

export const useAppStore = buildStore<AppStore>("app", 1, (set, get) => ({
  ...appInitialState,
  ...getAppStoreActions(set, get),
}));

useAppStore.persist.onFinishHydration((state) => {
  if (!state.loaded) {
    state.setLoaded(true);
  }
});
