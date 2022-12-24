import create from "zustand";
import {
  ExampleItem,
  ExampleListRequest,
  ExampleListResponse,
} from "@core/services/example/ExampleRepositoryInterface";
import { AXFDGDataItem, AXFDGPage, AXFDGSortParam } from "@axframe/datagrid";
import { ExampleService } from "services";
import { errorDialog } from "@core/components/dialogs/errorDialog";
import { usePageTabStore } from "@core/stores/usePageTabStore";
import { subscribeWithSelector } from "zustand/middleware";
import shallow from "zustand/shallow";
import { DefaultPageStoreActions, StoreActions } from "@core/stores/types";

interface APIRequest extends ExampleListRequest {}
interface APIResponse extends ExampleListResponse {}

interface MetaData {
  exampleListRequestValue: APIRequest;
  exampleListColWidths: number[];
  exampleListSortParams: AXFDGSortParam[];
}

interface States extends MetaData {
  routePath?: string; // initialized Store;
  exampleListSpinning: boolean;
  exampleListData: AXFDGDataItem<ExampleItem>[];
  exampleListPage: AXFDGPage;
}

interface Actions extends DefaultPageStoreActions {
  setExampleListRequestValue: (exampleListRequestValue: APIRequest) => void;
  setExampleListColWidths: (exampleListColWidths: number[]) => void;
  setExampleListSpinning: (exampleListSpinning: boolean) => void;
  setExampleListSortParams: (sortParams: AXFDGSortParam[]) => void;
  callExampleListApi: (request?: APIRequest) => Promise<void>;
  changeExampleListPage: (currentPage: number, pageSize?: number) => Promise<void>;
}

// create states
const _exampleListRequestValue = {
  pageNumber: 1,
  pageSize: 100,
};
const createState: States = {
  exampleListRequestValue: { ..._exampleListRequestValue },
  exampleListColWidths: [],
  exampleListSpinning: false,
  exampleListData: [],
  exampleListPage: {
    currentPage: 0,
    totalPages: 0,
  },
  exampleListSortParams: [],
};

// create actions
const createActions: StoreActions<States & Actions, Actions> = (set, get) => ({
  setExampleListRequestValue: (exampleListRequestValues) => {
    set({ exampleListRequestValue: exampleListRequestValues });
  },
  setExampleListColWidths: (exampleListColWidths) => set({ exampleListColWidths }),
  setExampleListSpinning: (exampleListSpinning) => set({ exampleListSpinning }),
  setExampleListSortParams: (sortParams) => set({ exampleListSortParams: sortParams }),
  callExampleListApi: async (request) => {
    await set({ exampleListSpinning: true });

    try {
      const apiParam = request ?? get().exampleListRequestValue;
      const response = await ExampleService.list(apiParam);

      set({
        exampleListData: response.ds.map((values) => ({
          values,
        })),
        exampleListPage: {
          currentPage: response.rs.pageNumber ?? 1,
          pageSize: response.rs.pageSize ?? 0,
          totalPages: response.rs.pgCount ?? 0,
          totalElements: response.ds.length,
        },
      });
    } catch (e) {
      await errorDialog(e as any);
    } finally {
      await set({ exampleListSpinning: false });
    }
  },
  changeExampleListPage: async (pageNumber, pageSize) => {
    const exampleListRequestValues = {
      ...get().exampleListRequestValue,
      pageNumber,
      pageSize,
    };
    set({ exampleListRequestValue: exampleListRequestValues });
    await get().callExampleListApi();
  },
  syncMetadata: (metaData) => {
    if (metaData) {
      console.log(`apply metaData Store : useExampleListStore`);
      set({
        exampleListSortParams: metaData.exampleListSortParams,
        exampleListRequestValue: metaData.exampleListRequestValue,
        exampleListColWidths: metaData.exampleListColWidths,
      });
    } else {
      console.log(`clear metaData Store : useExampleListStore`);
      set({
        exampleListRequestValue: _exampleListRequestValue,
      });
    }
  },

  init: async (routePath) => {
    const metaData = usePageTabStore.getState().getTabMetaDataByPath(routePath);
    if (metaData) get().syncMetadata(metaData);

    set({ routePath });
    await get().callExampleListApi();
  },
  reset: async () => {
    const routePath = get().routePath;
    if (!routePath) return;

    usePageTabStore.getState().setTabMetaDataByPath(routePath, {});
    get().syncMetadata();
    await get().callExampleListApi();
  },
  destroy: () => {
    unSubscribeExampleListStore();
  },
});

// ---------------- exports
export interface ExampleListStore extends States, Actions {}
export const useExampleListStore = create(
  subscribeWithSelector<ExampleListStore>((set, get) => ({
    ...createState,
    ...createActions(set, get),
  }))
);

// pageModel 에 저장할 대상 모델 셀렉터 정의
export const unSubscribeExampleListStore = useExampleListStore.subscribe(
  (s) => [s.exampleListSortParams, s.exampleListRequestValue, s.exampleListColWidths],
  ([exampleListSortParams, exampleListRequestValue, exampleListColWidths]) => {
    const routePath = useExampleListStore.getState().routePath;
    if (!routePath) return;
    console.log(`Save metaData '${routePath}', Store : useExampleStore`);

    usePageTabStore.getState().setTabMetaDataByPath<MetaData>(routePath, {
      exampleListSortParams,
      exampleListRequestValue,
      exampleListColWidths,
    });
  },
  { equalityFn: shallow }
);
