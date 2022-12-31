import { MenuIdType } from "router/menus";
import { User } from "stores";
import { SignInFormItem } from "pages/signin";

export interface GetUserMenuResponse {
  accessibleMenus: MenuIdType[];
}

export interface UserRepositoryInterface {
  signIn(values: SignInFormItem): Promise<User>;
  signOut(): Promise<void>;
  getUserAccessibleMenus(userUuid: string): Promise<GetUserMenuResponse>;
}
