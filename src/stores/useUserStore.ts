import buildStore from "@core/stores/buildStore";
import { UserService } from "services";
import { MenuIdType } from "router/menus";
import { usePageTabStore } from "../@core/stores/usePageTabStore";
// import { setApiHeader } from "../services/apiWrapper";
import { getAppData } from "../@core/utils/store";

export interface User {
  uuid: string;
  name: string;
  email: string;
  jobTitle?: string;
}

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
  accessibleMenus: MenuIdType[];
  openedMenuUuids: string[];
  selectedMenuUuid: string;
}

export interface UserActions {
  setLoaded: (loaded: boolean) => void;
  setMe: (me: User) => Promise<void>;
  clearMe: () => void;
  signOut: () => Promise<void>;
  setAccessibleMenus: (accessibleMenus: MenuIdType[]) => void;
  setOpenedMenuUuids: (uuids: string[]) => void;
  setSelectedMenuUuid: (uuid: string) => void;
}

export interface UserStore extends UserModel, UserActions {}

export const userInitialState: UserModel = {
  loaded: false,
  accessibleMenus: [],
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
      console.log(me);
      const { accessibleMenus } = await UserService.getUserAccessibleMenus(me.uuid);
      set({ me, accessibleMenus });
    },
    clearMe: () => {
      set({ me: undefined });
    },
    signOut: async () => {
      await UserService.signOut();
      set({ me: undefined });
      usePageTabStore.getState().clearTab();
    },
    setAccessibleMenus: (accessibleMenus) => {
      set({ accessibleMenus });
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
    // setApiHeader(appData.authorization);
  } else {
    state.clearMe();
  }

  if (!state.loaded) {
    state.setLoaded(true);
  }
});
