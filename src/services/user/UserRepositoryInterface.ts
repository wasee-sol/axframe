export interface User {
  userNm: string;
  userCd: string;
  timeZone: number;
  programList: string[];
  locale: string;
  authorityList: string[];
  email: string;
  compCd: string;
}

export interface SignInRequest {
  userCd?: string;
  userPs?: string;
}

export interface SignInResponse {
  rs: User;
}

export abstract class UserRepositoryInterface {
  abstract signIn(params: SignInRequest): Promise<SignInResponse>;
  abstract signOut(): Promise<void>;
}
