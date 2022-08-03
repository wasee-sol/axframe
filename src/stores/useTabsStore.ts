import buildStore from "stores/buildStore";
import { v4 as uuidv4 } from "uuid";

export interface TabModel {
  label: string;
  path: string;
}

export interface TabsModel {
  list: Map<string, TabModel>;
  activeTabUuid: string;
}

export interface TabsActions {
  addTab: (tab: TabModel) => void;
  removeTab: (tabUuid: string) => void;
  updateTab: (tabUuid: string, tab: TabModel) => void;
  setActiveTab: (tabUuid: string) => void;
}

export interface TabsStore extends TabsModel, TabsActions {}

const initialUuid = uuidv4();
const initialTab: TabModel = { label: "HOME", path: "/" };
export const tabsInitialState: TabsModel = {
  list: new Map<string, TabModel>([[initialUuid, initialTab]]),
  activeTabUuid: initialUuid,
};

const useTabsStore = buildStore<TabsStore>("tabs", (set, get) => ({
  ...tabsInitialState,
  addTab: (tab) => {},
  removeTab: (tabUuid) => {},
  updateTab: (tabUuid, tab) => {},
  setActiveTab: (tabUuid) => {},
}));

export default useTabsStore;
