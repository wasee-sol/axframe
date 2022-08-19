import { MenuItemType } from "rc-menu/lib/interface";

export interface MenuItem extends MenuItemType {
  children?: MenuItem[];
  enum?: MenuEnum;
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
