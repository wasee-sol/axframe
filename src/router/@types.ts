import { LanguageType } from "../i18n";
import { MenuItemType } from "rc-menu/lib/interface";

export enum PROGRAM_TYPES {
  EXAMPLE_FORM = "EXAMPLE_FORM",
  EXAMPLE_DETAIL = "EXAMPLE_DETAIL",
  EXAMPLE_LIST = "EXAMPLE_LIST",
  EXAMPLE_LIST_AND_DRAWER = "EXAMPLE_LIST_AND_DRAWER",
  EXAMPLE_LIST_AND_MODAL = "EXAMPLE_LIST_AND_MODAL",
  EXAMPLE_LIST_WITH_FORM = "EXAMPLE_LIST_WITH_FORM",
  EXAMPLE_LIST_WITH_LIST = "EXAMPLE_LIST_WITH_LIST",
}

export interface MenuItem extends MenuItemType {
  children?: MenuItem[];
  program_type?: PROGRAM_TYPES;
  labels?: Record<LanguageType, string>;
  route?: Record<string, any>;
}
