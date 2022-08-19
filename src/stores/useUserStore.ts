import buildStore from "stores/buildStore";
import { UserService } from "services";
import { MenuEnum } from "../@types";
import usePageTabStore from "./usePageTabStore";

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
  accessibleMenus: MenuEnum[];
  openedMenuUuids: string[];
  selectedMenuUuid: string;
}

export interface UserActions {
  setLoaded: (loaded: boolean) => void;
  setMe: (me: User) => Promise<void>;
  signOut: () => Promise<void>;
  setAccessibleMenus: (accessibleMenus: MenuEnum[]) => void;
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

const useUserStore = buildStore<UserStore>("user", 2, (set, get) => ({
  ...userInitialState,
  setLoaded: (loaded: boolean) => set({ loaded }),
  setMe: async (me) => {
    const { accessibleMenus } = await UserService.getUserAccessibleMenus(me.uuid);
    set({ me, accessibleMenus });
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
}));

useUserStore.persist.onFinishHydration((state) => {
  if (!state.loaded) {
    state.setLoaded(true);
  }
});

export default useUserStore;
