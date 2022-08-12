import { delay } from "utils/thread/timing";
import { SignInFormItem } from "@template/account/SignIn";
import { mock_userMenus } from "stories/_mock/userMenus";
import { UserRepositoryInterface } from "./UserRepositoryInterface";

export class MockUserRepository implements UserRepositoryInterface {
  public async getUserMenu(userUuid: string) {
    console.log("userUuid", userUuid);
    await delay(500);

    return {
      menus: mock_userMenus,
    };
  }

  public async signIn(values: SignInFormItem) {
    await delay(500);
    return {
      uuid: "test-user-uuid",
      name: values.userId ?? "",
      email: "tom@axisj.com",
      jobTitle: "Software Developer",
    };
  }

  public async signOut() {
    await delay(500);
    return;
  }
}
