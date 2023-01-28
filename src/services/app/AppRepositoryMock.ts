import {
  AppRepositoryInterface,
  GetAppMenuRequest,
  GetAppMenuResponse,
  GetProgramAuthorityRequest,
  GetProgramAuthorityResponse,
} from "./AppRepositoryInterface";
import { delay } from "../../@core/utils/thread/timing";

export class AppRepositoryMock extends AppRepositoryInterface {
  async getAppMenu(params: GetAppMenuRequest): Promise<GetAppMenuResponse> {
    await delay(500);

    return {
      ds: [
        {
          menuGrpCd: "EXAMPLE",
          multiLanguage: {
            ko: "예제",
            en: "EXAMPLE",
          },
          iconTy: "Template",
          children: [
            {
              multiLanguage: {
                en: "FORM",
                ko: "FORM",
              },
              iconTy: "Template",
              level: 1,
              sort: 0,
              progCd: "EXAMPLE_FORM",
              children: [],
            },
            {
              multiLanguage: {
                en: "LIST",
                ko: "LIST",
              },
              iconTy: "Template",
              level: 1,
              sort: 1,
              progCd: "EXAMPLE_LIST",
              children: [],
            },
            {
              multiLanguage: {
                en: "LIST&DRAWER",
                ko: "LIST&DRAWER",
              },
              iconTy: "Template",
              level: 1,
              sort: 2,
              progCd: "EXAMPLE_LIST_AND_DRAWER",
              children: [],
            },
            {
              multiLanguage: {
                en: "LIST&MODAL",
                ko: "LIST&MODAL",
              },
              iconTy: "Template",
              level: 1,
              sort: 3,
              progCd: "EXAMPLE_LIST_AND_MODAL",
              children: [],
            },
          ],
          userGroup: ["ROLE_ADMIN"],
        },
      ],
    };
  }

  async getProgramAuthority(params: GetProgramAuthorityRequest): Promise<GetProgramAuthorityResponse> {
    return Promise.resolve({});
  }
}
