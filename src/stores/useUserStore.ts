import buildStore from "@core/stores/buildStore";
import { User, UserService } from "services";
import { PROGRAM_TYPES } from "router/menus";
import { usePageTabStore } from "../@core/stores/usePageTabStore";
import { setApiHeader } from "../services/apiWrapper";
import { getAppData } from "../@core/utils/store";

export interface UserMenuItem {
  icon?: string;
  uuid: string;
  label: string;
  path?: string;
  children?: UserMenuItem[];
}

export interface UserModel {
  loaded: boolean;
  me?: User;
  authorityList: string[];
  programList: PROGRAM_TYPES[];
  openedMenuUuids: string[];
  selectedMenuUuid: string;
}

export interface UserActions {
  setLoaded: (loaded: boolean) => void;
  setMe: (me: User) => Promise<void>;
  clearMe: () => void;
  signOut: () => Promise<void>;
  setAuthorityList: (accessibleMenus: string[]) => void;
  setProgramList: (programList: PROGRAM_TYPES[]) => void;
  setOpenedMenuUuids: (uuids: string[]) => void;
  setSelectedMenuUuid: (uuid: string) => void;
}

export interface UserStore extends UserModel, UserActions {}

export const userInitialState: UserModel = {
  loaded: false,
  authorityList: [],
  programList: [],
  openedMenuUuids: [],
  selectedMenuUuid: "",
};

export const useUserStore = buildStore<UserStore>(
  "user",
  2,
  (set, get) => ({
    ...userInitialState,
    setLoaded: (loaded: boolean) => set({ loaded }),
    setMe: async (me) => {
      set({ me, authorityList: me.authorityList, programList: me.programList as PROGRAM_TYPES[] });
    },
    clearMe: () => {
      set({ me: undefined, authorityList: [], programList: [] });
    },
    signOut: async () => {
      await UserService.signOut();
      get().clearMe();
      usePageTabStore.getState().clearTab();
    },
    setAuthorityList: (authorityList) => {
      set({ authorityList });
    },
    setProgramList: (programList) => {
      set({ programList });
    },
    setOpenedMenuUuids: (uuids) => {
      set({ openedMenuUuids: uuids });
    },
    setSelectedMenuUuid: (uuid) => {
      set({ selectedMenuUuid: uuid });
    },
  }),
  (storageValue) => {
    storageValue.state.selectedMenuUuid = "";
    return storageValue;
  }
);

useUserStore.persist.onFinishHydration((state) => {
  const appData = getAppData();
  if (appData) {
    setApiHeader(appData.authorization);
  } else {
    state.clearMe();
  }

  if (!state.loaded) {
    state.setLoaded(true);
  }
});
