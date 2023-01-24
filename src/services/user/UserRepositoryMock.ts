import { delay } from "@core/utils/thread/timing";
import { SignInResponse, UserRepositoryInterface } from "./UserRepositoryInterface";
import { PROGRAM_TYPES } from "../../router/menus";

export class UserRepositoryMock implements UserRepositoryInterface {
  public async signIn(values): Promise<SignInResponse> {
    await delay(500);

    return {
      rs: {
        userNm: values.userId ?? "",
        userCd: values.userId ?? "",
        timeZone: 9,
        locale: "en",
        authorityList: ["ROLE_ADMIN", "ROLE_ASP", "ROLE_USER"],
        programList: [
          PROGRAM_TYPES.SAMPLE_REGISTRATION,
          PROGRAM_TYPES.SAMPLE_LIST,
          PROGRAM_TYPES.SAMPLE_LIST_AND_MODAL,
          PROGRAM_TYPES.SAMPLE_LIST_AND_DRAWER,
          PROGRAM_TYPES.SAMPLE_LIST_WITH_LIST,
          PROGRAM_TYPES.SAMPLE_LIST_WITH_FORM,

          PROGRAM_TYPES.DASHBOARD,
          PROGRAM_TYPES.SETTING,
        ],
        email: "jikook71@naver.com",
        compCd: "V100",
      },
    };
  }

  public async signOut() {
    await delay(500);
    return;
  }
}
