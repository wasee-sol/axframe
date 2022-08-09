import * as React from "react";
import buildStore from "stores/buildStore";

export interface UserMenuItem {
  icon: React.ReactNode;
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
  setMenus: (title: string) => void;
  setOpenedUuids: (uuid: string) => void;
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
  setMenus: () => {},
  setOpenedUuids: (uuid) => {},
  setSelectedUuid: (uuid) => {},
}));

export default useUserMenuStore;
