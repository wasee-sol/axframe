export interface ApiListResponse {
  result: string;
  msg: string;
  ds: Record<string, any>[];
  rs: Record<string, any>;
}

export interface ApiPageResponse {
  pgCount: number;
  total: number;
  pageNumber: number;
  pageSize: number;
}

export interface MousePosition {
  pageX: number;
  pageY: number;
  clientX: number;
  clientY: number;
}

export interface DataGridPageResponse extends ApiPageResponse {
  endPageNo?: number;
  totalCount?: number;
}

export type DtoItemStatus = "C" | "U" | "D";

export interface DefaultDto {
  __status__?: DtoItemStatus;
  rowId?: string;
}
export interface Option {
  label?: string;
  value?: string;
}
export interface FileDto {
  fileKey?: string;
  savePath?: string;
  seq?: number;
  saveNm?: string;
  fileSize?: number;
  fileNm?: string;
  extension?: string;
  width?: number;
  height?: number;
  dwldCnt?: number;
  attachCls?: string;
  attachClsId?: string;
  thumbnail?: string;
  url?: string;
  download?: string;
}

export * from "./error";
