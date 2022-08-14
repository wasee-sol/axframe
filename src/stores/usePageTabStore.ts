import buildStore from "stores/buildStore";
import { v4 as uuidv4 } from "uuid";

export interface PageModel {
  label: string;
  path: string;
  icon?: string;
  metaData?: Record<string, any>;
}

export interface PagesTabModel {
  pages: Map<string, PageModel>;
  activeTabUuid: string;
}

export interface TabsActions {
  addTab: (page: PageModel) => string;
  removeTab: (tabUuid: string) => void;
  updateTab: (tabUuid: string, page: PageModel) => void;
  setActiveTab: (tabUuid: string) => void;
}

export interface TabsStore extends PagesTabModel, TabsActions {}

const initialUuid = uuidv4();
const initialPage: PageModel = { label: "HOME", path: "/" };
export const tabsInitialState: PagesTabModel = {
  pages: new Map<string, PageModel>([[initialUuid, initialPage]]),
  activeTabUuid: initialUuid,
};

const usePageTabStore = buildStore<TabsStore>("tabs", (set, get) => ({
  ...tabsInitialState,
  addTab: (page) => {
    const tabUuid = uuidv4();
    get().pages.set(tabUuid, page);
    return tabUuid;
  },
  removeTab: (tabUuid) => {},
  updateTab: (tabUuid, page) => {},
  setActiveTab: (tabUuid) => {},
}));

export default usePageTabStore;
