import buildStore from "stores/buildStore";
import { UserService } from "services";
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
  menus: UserMenuItem[];
  openedMenuUuids: string[];
  selectedMenuUuid: string;
}

export interface UserActions {
  setLoaded: (loaded: boolean) => void;
  setMe: (me: User) => Promise<void>;
  signOut: () => Promise<void>;
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

const useUserStore = buildStore<UserStore>("user", 1, (set, get) => ({
  ...userInitialState,
  setLoaded: (loaded: boolean) => set({ loaded }),
  setMe: async (me) => {
    const { menus } = await UserService.getUserMenu(me.uuid);
    // TODO : 사용자 메뉴를 받는 식이 아니라. 사용 가능한 메뉴 목록을 내려 받는 식으로 조정 필요.
    set({ me, menus });
  },
  signOut: async () => {
    await UserService.signOut();
    set({ me: undefined });
    usePageTabStore.getState().clearTab();
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
