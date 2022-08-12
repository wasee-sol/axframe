import { User, UserMenuItem } from "stores";
import { SignInFormItem } from "../@template/account/SignIn";

export interface GetUserMenuResponse {
  menus: UserMenuItem[];
}

export interface UserRepositoryInterface {
  signIn(values: SignInFormItem): Promise<User>;
  signOut(): Promise<void>;
  getUserMenu(userUuid: string): Promise<GetUserMenuResponse>;
}
