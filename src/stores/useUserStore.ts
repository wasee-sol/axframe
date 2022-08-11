import buildStore from "stores/buildStore";
import { SignInFormItem } from "@template/account/SignIn";
import { UserRepository } from "repository/UserRepository";

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
  signIn: (values: SignInFormItem) => Promise<void>;
  signOut: () => void;
}

export interface UserStore extends UserModel, UserActions {}

export const userInitialState: UserModel = {};

const useUserStore = buildStore<UserStore>("user", (set, get) => ({
  ...userInitialState,
  setMe: (me) => {
    set({ me });
  },
  signIn: async (values) => {
    const me = await UserRepository.signIn(values);
    set({ me });
  },
  signOut: () => {
    set({ me: undefined });
  },
}));

export default useUserStore;
