import buildStore from "stores/buildStore";
import { UserService } from "services";

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
  menus: UserMenuItem[];
  openedMenuUuids: string[];
  selectedMenuUuid: string;
}

export interface UserActions {
  setLoaded: (loaded: boolean) => void;
  setMe: (me: User) => Promise<void>;
  signOut: () => void;
  setMenus: (menus: UserMenuItem[]) => void;
  setOpenedMenuUuids: (uuids: string[]) => void;
  setSelectedMenuUuid: (uuid: string) => void;
}

export interface UserStore extends UserModel, UserActions {}

export const userInitialState: UserModel = {
  loaded: false,
  menus: [],
  openedMenuUuids: [],
  selectedMenuUuid: "",
};

const useUserStore = buildStore<UserStore>("user", (set, get) => ({
  ...userInitialState,
  setLoaded: (loaded: boolean) => set({ loaded }),
  setMe: async (me) => {
    const { menus } = await UserService.getUserMenu(me.uuid);
    set({ me, menus });
  },
  signOut: () => {
    set({ me: undefined });
  },
  setMenus: (menus) => {
    set({ menus });
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
