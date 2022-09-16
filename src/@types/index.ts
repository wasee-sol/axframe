import { MenuItemType } from "rc-menu/lib/interface";
import { LanguageType } from "../i18n";

export interface MenuItem extends MenuItemType {
  children?: MenuItem[];
  enum?: MenuEnum;
  i18nlabel?: Record<LanguageType, string>;
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
