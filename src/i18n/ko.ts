import EN from "./en";
import { KO_pages } from "./pages";
import { KO_datagrid } from "./datagrid";
import { KO_formItem } from "./formItem/KO_formItem";
import { KO_button } from "./button";
import { KO_msg } from "./msg";
import { KO_filterType } from "./filterType";
import { KO_pageTab } from "./pageTab";
import { EN_apiErrMsg } from "./error";
import { KO_common } from "./common";

const KO: typeof EN = {
  appName: "AXFrame",
  formItem: KO_formItem,
  datagrid: KO_datagrid,
  filterType: KO_filterType,
  button: KO_button,
  pageTab: KO_pageTab,
  pages: KO_pages,
  msg: KO_msg,
  apiErrMsg: EN_apiErrMsg,
  common: KO_common,
};
export default KO;
