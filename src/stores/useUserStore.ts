import buildStore from "stores/buildStore";

export interface Me {
  uuid: string;
  name: string;
  email: string;
}

export interface UserModel {
  me?: Me;
}

export interface UserActions {
  setMe: (me: Me) => void;
  signOut: () => void;
}

export interface UserStore extends UserModel, UserActions {}

export const userInitialState: UserModel = {};

const useUserStore = buildStore<UserStore>("user", (set, get) => ({
  ...userInitialState,
  setMe: (me) => {
    set({ me });
  },
  signOut: () => {
    set({ me: undefined });
  },
}));

export default useUserStore;
