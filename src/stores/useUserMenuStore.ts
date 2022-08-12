import buildStore from "stores/buildStore";

export interface UserMenuItem {
  icon?: string;
  uuid: string;
  label: string;
  path?: string;
  children?: UserMenuItem[];
}

export interface UserMenuModel {
  menus: UserMenuItem[];
  openedUuids: string[];
  selectedUuid: string;
}

export interface UserMenuActions {
  setMenus: (menus: UserMenuItem[]) => void;
  setOpenedUuids: (uuids: string[]) => void;
  setSelectedUuid: (uuid: string) => void;
}

export interface UserMenuStore extends UserMenuModel, UserMenuActions {}

export const userMenuInitialState: UserMenuModel = {
  menus: [],
  openedUuids: [],
  selectedUuid: "",
};

const useUserMenuStore = buildStore<UserMenuStore>("userMenu", (set, get) => ({
  ...userMenuInitialState,
  setMenus: (menus) => {
    set({ menus });
  },
  setOpenedUuids: (uuids) => {
    set({ openedUuids: uuids });
  },
  setSelectedUuid: (uuid) => {
    set({ selectedUuid: uuid });
  },
}));

export default useUserMenuStore;
