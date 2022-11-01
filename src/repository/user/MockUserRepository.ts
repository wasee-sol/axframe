import { delay } from "utils/thread/timing";
import { SignInFormItem } from "@template/account/SignIn";
import { mock_userAccessibleMenus } from "stories/_mock/userAccessibleMenus";
import { UserRepositoryInterface } from "./UserRepositoryInterface";

export class MockUserRepository implements UserRepositoryInterface {
  public async getUserAccessibleMenus(userUuid: string) {
    console.log("userUuid", userUuid);
    await delay(500);

    return {
      accessibleMenus: mock_userAccessibleMenus,
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
