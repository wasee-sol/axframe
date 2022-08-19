import { User } from "stores";
import { SignInFormItem } from "../@template/account/SignIn";
import { MenuEnum } from "@types";

export interface GetUserMenuResponse {
  accessibleMenus: MenuEnum[];
}

export interface UserRepositoryInterface {
  signIn(values: SignInFormItem): Promise<User>;
  signOut(): Promise<void>;
  getUserAccessibleMenus(userUuid: string): Promise<GetUserMenuResponse>;
}
