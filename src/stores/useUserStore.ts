import buildStore from "stores/buildStore";

export interface User {
  uuid: string;
  name: string;
  email: string;
  jobTitle?: string;
}

export interface UserModel {
  me?: User;
}

export interface UserActions {
  setMe: (me: User) => void;
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
