import { delay } from "@core/utils/thread/timing";
import { SignInRequest, SignInResponse, UserRepositoryInterface } from "./UserRepositoryInterface";
import { setApiHeader } from "../apiWrapper";
import { setAppData } from "../../@core/utils/store";
import pkg from "../../../package.json";
import { v4 as uuidv4 } from "uuid";

export class UserRepositoryMock implements UserRepositoryInterface {
  public async signIn(params: SignInRequest): Promise<SignInResponse> {
    await delay(500);

    const headers = {
      authorization: uuidv4(),
      token: uuidv4(),
    };

    setApiHeader(headers.authorization);
    setAppData({
      name: pkg.name,
      version: pkg.version,
      authorization: headers.authorization,
      token: headers.token ?? "",
    });

    return {
      rs: {
        userNm: "시스템사용자",
        userCd: "system",
        timeZone: 9,
        locale: "en",
        authorityList: ["ROLE_ADMIN", "ROLE_ASP", "ROLE_USER"],
        programList: [
          "EXAMPLE_FORM",
          "EXAMPLE_DETAIL",
          "EXAMPLE_LIST",
          "EXAMPLE_LIST_AND_DRAWER",
          "EXAMPLE_LIST_AND_MODAL",
          "EXAMPLE_LIST_WITH_FORM",
          "EXAMPLE_LIST_WITH_LIST",
        ],
        email: "jikook71@naver.com",
        compCd: "V100",
      },
    };
  }

  signOut(): Promise<void> {
    return Promise.resolve(undefined);
  }
}
