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
  setActiveTabByPath: (path: string, label?: string) => void;
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
    const pages = get().pages;
    pages.delete(tabUuid);
    set({ pages: new Map([...pages]) });
    return get().getActiveTabPage();
  },
  updateTab: (tabUuid, page) => {
    get().pages.set(tabUuid, page);
  },
  setActiveTab: (activeTabUuid) => {
    set({ activeTabUuid });
  },
  getActiveTabPage: () => {
    const activeTabUuid = get().activeTabUuid;
    const pages = get().pages;
    const tabPage = pages.get(activeTabUuid);
    if (tabPage) {
      return {
        tabUuid: activeTabUuid,
        page: tabPage,
      };
    }

    const pagesEntries = [...pages];
    const pageEntry = pagesEntries[pagesEntries.length - 1];
    if (pageEntry) {
      set({ activeTabUuid: pageEntry[0] });
      return {
        tabUuid: pageEntry[0],
        page: pageEntry[1],
      };
    }

    const tabUuid = uuidv4();
    pages.set(tabUuid, initialPage);
    set({ activeTabUuid: tabUuid });
    return {
      tabUuid,
      page: initialPage,
    };
  },
  setActiveTabByPath: (path, label = "") => {
    const pagesEntries = [...get().pages];
    const existsPageEntry = pagesEntries.find(([, _page]) => _page.path === path);
    if (existsPageEntry) {
      set({ activeTabUuid: existsPageEntry[0] });
    } else {
      const addedTabUuid = get().addTab({
        label,
        path,
        fixed: false,
      });
      get().setActiveTab(addedTabUuid);
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
