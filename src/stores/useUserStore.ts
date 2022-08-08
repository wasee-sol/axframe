import buildStore from "stores/buildStore";

export interface Member {
  uuid: string;
  name: string;
  email: string;
  jobTitle?: string;
}

export interface UserModel {
  me?: Member;
}

export interface UserActions {
  setMe: (me: Member) => void;
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
