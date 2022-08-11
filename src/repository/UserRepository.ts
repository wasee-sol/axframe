import { User, UserMenuItem } from "stores";
import { delay } from "utils/thread/timing";
import { SignInFormItem } from "@template/account/SignIn";
import { mock_userMenus } from "../stories/_mock/userMenus";

interface GetUserMenuResponse {
  menus: UserMenuItem[];
}

export const UserRepository = {
  async signIn(values: SignInFormItem): Promise<User> {
    await delay(500);
    return {
      uuid: "test-user-uuid",
      name: values.userId ?? "",
      email: "tom@axisj.com",
      jobTitle: "Software Developer",
    };
  },
  async signOut(): Promise<void> {
    await delay(500);
    return;
  },
  async getUserMenu(userUuid: string): Promise<GetUserMenuResponse> {
    console.log("userUuid", userUuid);
    await delay(500);

    return {
      menus: mock_userMenus,
    };
  },
};
