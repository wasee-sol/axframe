import { RFDGSortParam } from "react-frame-datagrid";
import { ApiListResponse, ApiPageResponse } from "../@types";

export interface CounselingItem {
  id: number;
  cntrCd: string;
  cntrNm: string;
  cnsltUserCd: string;
  area: string;
  cnsltUserNm: string;
  cnsltDt: string;
  cnsltHow: string;
  cnsltPath?: string;
  cnsltPathDtl?: string;
  name: string;
  birthDt: string;
  sex?: string;
  phone1?: string;
  phone2?: string;
  zipNum?: string;
  addr?: string;
  addrDtls?: string;
  inhseDt?: string;
  inhseTimeStt?: string;
  inhseTimeEnd?: string;
  hndcapYn?: string;
  hndcapTyp?: string;
  hndcapGrade?: string;
  fmCnt?: number;
  fmTyp?: string;
  fmTypEtc?: string;
  homeTyp?: string;
  homeTyp2?: string;
  homeTypEtc?: string;
  homeOwnerTyp?: string;
  homeFloor?: string;
  guaranteeAmt?: number;
  monthlyAmt?: number;
  fldA?: string;
  fldADtl1?: string;
  fldT?: string;
  hopePoint?: string;
  hopePoint1?: string;
  hopePoint1Etc?: string;
  hopePoint3?: string;
  new: boolean;
  updatedAt: string;
  updatedBy: string;
  updatedByNm: string;
}

export interface CounselingListRequest {
  sttDt?: string;
  endDt?: string;
  filterType?: string;
  filter?: string;
  sorts?: RFDGSortParam[];
  pageSize?: number;
  pageNumber?: number;
}

export interface CounselingListResponse extends ApiListResponse {
  ds: CounselingItem[];
  rs: ApiPageResponse;
}

export interface CounselingRepositoryInterface {
  list(params: CounselingListRequest): Promise<CounselingListResponse>;
}
