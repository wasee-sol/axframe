import { MenuItemType } from "rc-menu/lib/interface";
import { LanguageType } from "../i18n";

export interface MenuItem extends MenuItemType {
  children?: MenuItem[];
  enum?: MenuEnum;
  i18nlabel?: Record<LanguageType, string>;
  route?: Record<string, any>;
}

export enum MenuEnum {
  COUNSELING_REGISTRATION = "COUNSELING_REGISTRATION",
  COUNSELING_LIST = "COUNSELING_LIST",
  ANALYTICS = "ANALYTICS",
  INBOX = "INBOX",
  PROJECT = "PROJECT",
  REPORT = "REPORT",
  SETTING = "SETTING",
  TEMPLATE = "TEMPLATE",
}

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
