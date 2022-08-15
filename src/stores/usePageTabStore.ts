import buildStore from "stores/buildStore";
import { v4 as uuidv4 } from "uuid";

export interface PageModel {
  fixed?: boolean;
  label: string;
  path?: string;
  icon?: string;
  metaData?: Record<string, any>;
  isHome?: boolean;
}

export interface PagesTabModel {
  pages: Map<string, PageModel>;
  activeTabUuid: string;
}

export interface PageTab {
  tabUuid: string;
  page: PageModel;
}

export interface TabsActions {
  addTab: (page: PageModel) => string;
  removeTab: (tabUuid: string) => void;
  updateTab: (tabUuid: string, page: PageModel) => void;
  setActiveTab: (activeTabUuid: string) => void;
  getActiveTabPage: () => PageTab;
  setActiveTabByPath: (path: string) => void;
  clearTab: () => void;
}

export interface TabsStore extends PagesTabModel, TabsActions {}

const initialUuid = uuidv4();
const initialPage: PageModel = { label: "HOME", path: "/", fixed: true, isHome: true };
export const tabsInitialState: PagesTabModel = {
  pages: new Map<string, PageModel>([[initialUuid, initialPage]]),
  activeTabUuid: initialUuid,
};

const usePageTabStore = buildStore<TabsStore>("page-tab", 2, (set, get) => ({
  ...tabsInitialState,
  addTab: (page) => {
    const pagesEntries = [...get().pages];
    const existsPageEntry = pagesEntries.find(([, _page]) => _page.path === page.path);
    if (existsPageEntry) {
      return existsPageEntry[0];
    }

    const tabUuid = uuidv4();
    get().pages.set(tabUuid, page);
    return tabUuid;
  },
  removeTab: (tabUuid) => {
    get().pages.delete(tabUuid);
  },
  updateTab: (tabUuid, page) => {
    get().pages.set(tabUuid, page);
  },
  setActiveTab: (activeTabUuid) => {
    set({ activeTabUuid });
  },
  getActiveTabPage: () => {
    const activeTabUuid = get().activeTabUuid;
    const tabPage = get().pages.get(get().activeTabUuid);
    if (tabPage) {
      return {
        tabUuid: activeTabUuid,
        page: tabPage,
      };
    }

    const pagesEntries = [...get().pages];
    const homePageEntry = pagesEntries.find(([, page]) => page.isHome);
    if (homePageEntry) {
      set({ activeTabUuid: homePageEntry[0] });
      return {
        tabUuid: homePageEntry[0],
        page: homePageEntry[1],
      };
    }

    const tabUuid = uuidv4();
    get().pages.set(tabUuid, initialPage);
    set({ activeTabUuid: tabUuid });
    return {
      tabUuid,
      page: initialPage,
    };
  },
  setActiveTabByPath: (path) => {
    const pagesEntries = [...get().pages];
    const existsPageEntry = pagesEntries.find(([, _page]) => _page.path === path);
    if (existsPageEntry) {
      set({ activeTabUuid: existsPageEntry[0] });
    }
  },
  clearTab: () => {
    get().pages.forEach((value, key, map) => {
      if (!value.fixed) {
        map.delete(key);
      }
    });
  },
}));

export default usePageTabStore;
