import { MenuIdType } from "router/menus";
import { User } from "stores";
import { SignInFormItem } from "templates/pages/SignIn";

export interface GetUserMenuResponse {
  accessibleMenus: MenuIdType[];
}

export interface UserRepositoryInterface {
  signIn(values: SignInFormItem): Promise<User>;
  signOut(): Promise<void>;
  getUserAccessibleMenus(userUuid: string): Promise<GetUserMenuResponse>;
}
