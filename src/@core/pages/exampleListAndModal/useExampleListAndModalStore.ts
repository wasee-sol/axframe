import create from "zustand";
import {
  ExampleItem,
  ExampleListRequest,
  ExampleListResponse,
} from "@core/services/example/ExampleRepositoryInterface";
import { AXFDGDataItem, AXFDGPage, AXFDGSortParam } from "@axframe/datagrid";
import { ExampleService } from "services";
import { errorDialog } from "@core/components/dialogs/errorDialog";
import { setMetaDataByPath } from "@core/stores/usePageTabStore";
import { subscribeWithSelector } from "zustand/middleware";
import shallow from "zustand/shallow";
import { PageStoreActions, StoreActions } from "@core/stores/types";
import { pageStoreActions } from "@core/stores/pageStoreActions";

interface APIRequest extends ExampleListRequest {}
interface APIResponse extends ExampleListResponse {}
interface APIDetailRequest extends ExampleListRequest {}

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
  exampleDetailSpinning: boolean;
  exampleDetail?: ExampleItem;
}

interface Actions extends PageStoreActions {
  setExampleListRequestValue: (exampleListRequestValue: APIRequest) => void;
  setExampleListColWidths: (exampleListColWidths: number[]) => void;
  setExampleListSpinning: (exampleListSpinning: boolean) => void;
  setExampleListSortParams: (sortParams: AXFDGSortParam[]) => void;
  callExampleListApi: (request?: APIRequest) => Promise<void>;
  changeExampleListPage: (currentPage: number, pageSize?: number) => Promise<void>;
  setExampleDetailSpinning: (exampleSaveSpinning: boolean) => void;
  callExampleDetailApi: (request?: APIDetailRequest) => Promise<void>;
  syncMetadata: (metaData?: Record<string, any>) => void;
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
  exampleDetailSpinning: false,
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
  setExampleDetailSpinning: (exampleDetailSpinning) => set({ exampleDetailSpinning }),
  callExampleDetailApi: async (request) => {
    await set({ exampleDetailSpinning: true });

    try {
      const response = await ExampleService.detail(request);
      console.log(response);

      set({ exampleDetail: response.rs });
    } catch (e) {
      await errorDialog(e as any);
    } finally {
      await set({ exampleDetailSpinning: false });
    }
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
  ...pageStoreActions(set, get, () => unSubscribeExampleListStore()),
});

// ---------------- exports
export interface ExampleListStore extends States, Actions, PageStoreActions {}
export const useExampleListAndModalStore = create(
  subscribeWithSelector<ExampleListStore>((set, get) => ({
    ...createState,
    ...createActions(set, get),
  }))
);

// pageModel 에 저장할 대상 모델 셀렉터 정의
export const unSubscribeExampleListStore = useExampleListAndModalStore.subscribe(
  (s) => [s.exampleListSortParams, s.exampleListRequestValue, s.exampleListColWidths],
  ([exampleListSortParams, exampleListRequestValue, exampleListColWidths]) => {
    const routePath = useExampleListAndModalStore.getState().routePath;
    if (!routePath) return;
    console.log(`Save metaData '${routePath}', Store : useExampleStore`);

    setMetaDataByPath<MetaData>(routePath, {
      exampleListSortParams,
      exampleListRequestValue,
      exampleListColWidths,
    });
  },
  { equalityFn: shallow }
);
