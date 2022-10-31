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
