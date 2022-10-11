import { MenuItemType } from "rc-menu/lib/interface";
import { LanguageType } from "../i18n";

export interface MenuItem extends MenuItemType {
  children?: MenuItem[];
  enum?: MenuEnum;
  labels?: Record<LanguageType, string>;
  route?: Record<string, any>;
}

export enum MenuEnum {
  SAMPLE_REGISTRATION = "SAMPLE_REGISTRATION",
  SAMPLE_LIST = "SAMPLE_LIST",
  SAMPLE_LIST_WITH_MODAL = "SAMPLE_LIST_WITH_MODAL",
  SAMPLE_LIST_WITH_DRAWER = "SAMPLE_LIST_WITH_DRAWER",
  DASHBOARD = "DASHBOARD",
  SETTING = "SETTING",
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

export interface MousePosition {
  pageX: number;
  pageY: number;
  clientX: number;
  clientY: number;
}
