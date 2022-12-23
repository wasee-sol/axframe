import create from "zustand";
import {
  ExampleItem,
  ExampleListRequest,
  ExampleListResponse,
} from "@core/services/example/ExampleRepositoryInterface";
import { AXFDGDataItem, AXFDGPage, AXFDGSortParam } from "@axframe/datagrid";
import { CounselingService } from "services";
import { errorDialog } from "@core/components/dialogs/errorDialog";
import { usePageTabStore } from "@core/stores/usePageTabStore";
import { subscribeWithSelector } from "zustand/middleware";
import shallow from "zustand/shallow";
import { DefaultPageStoreActions } from "@core/stores/types";

interface APIRequest extends ExampleListRequest {}
interface APIResponse extends ExampleListResponse {}

interface MetaData {
  exampleListRequestValue: APIRequest;
  exampleListColWidths: number[];
  exampleSortParams: AXFDGSortParam[];
}

interface States extends MetaData {
  routePath?: string; // initialized Store;
  exampleListSpinning: boolean;
  exampleListData: AXFDGDataItem<ExampleItem>[];
  exampleListPage: AXFDGPage;
}

interface Actions extends DefaultPageStoreActions {
  setExampleListRequestValues: (exampleListRequestValues: APIRequest) => void;
  setExampleListColWidths: (exampleListColWidths: number[]) => void;
  setExampleListSpinning: (exampleListSpinning: boolean) => void;
  setExampleSortParams: (sortParams: AXFDGSortParam[]) => void;
  callExampleListApi: (request?: APIRequest) => Promise<void>;
  changeExampleListPage: (currentPage: number, pageSize?: number) => Promise<void>;
}

const _exampleListRequestValue = {
  pageNumber: 1,
  pageSize: 100,
};

// create states
const createState = (): States => ({
  exampleListRequestValue: { ..._exampleListRequestValue },
  exampleListColWidths: [],
  exampleListSpinning: false,
  exampleListData: [],
  exampleListPage: {
    currentPage: 0,
    totalPages: 0,
  },
  exampleSortParams: [],
});

// create actions
const createActions = (set, get): Actions => ({
  setExampleListRequestValues: (exampleListRequestValues) => {
    set({ exampleListRequestValue: exampleListRequestValues });
  },
  setExampleListColWidths: (exampleListColWidths) => set({ exampleListColWidths }),
  setExampleListSpinning: (exampleListSpinning) => set({ exampleListSpinning }),
  setExampleSortParams: (sortParams) => set({ exampleSortParams: sortParams }),
  callExampleListApi: async (request) => {
    await set({ exampleListSpinning: true });

    try {
      const apiParam = request ?? get().exampleListRequestValue;
      const response = await CounselingService.list(apiParam);

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
  applyMetadata: (metaData) => {
    set({
      exampleSortParams: metaData.exampleSortParams,
      exampleListRequestValue: metaData.exampleListRequestValue,
      exampleListColWidths: metaData.exampleListColWidths,
    });
  },

  init: async (routePath) => {
    const metaData = usePageTabStore.getState().getTabMetaDataByPath(routePath);

    if (metaData) {
      console.log(`apply metaData at '${routePath}', Store : useExampleStore`);
      try {
        get().applyMetadata(metaData);
      } catch (e) {
        console.error(
          "페이지 스토어 에서 applyMetadata 메소드를 찾을 수 없습니다. applyMetadata 액션을 만들어 주세요."
        );
      }
    }

    set({ routePath });
    await get().callExampleListApi();
  },
  reset: async () => {
    const routePath = get().routePath;
    if (!routePath) return;

    usePageTabStore.getState().setTabMetaDataByPath(routePath, {});
    set({
      exampleListRequestValue: _exampleListRequestValue,
    });
    await get().callExampleListApi();
  },
  destroy: () => {
    unSubscribeExampleStore();
  },
});

// ---------------- exports
export interface ExampleStore extends States, Actions {}
export const useExampleStore = create(
  subscribeWithSelector<ExampleStore>((set, get) => ({
    ...createState(),
    ...createActions(set, get),
  }))
);

// pageModel 에 저장할 대상 모델 셀렉터 정의
export const unSubscribeExampleStore = useExampleStore.subscribe(
  (s) => [s.exampleSortParams, s.exampleListRequestValue, s.exampleListColWidths],
  ([exampleSortParams, exampleListRequestValue, exampleListColWidths]) => {
    const routePath = useExampleStore.getState().routePath;
    if (!routePath) return;
    console.log(`Save metaData '${routePath}', Store : useExampleStore`);

    usePageTabStore.getState().setTabMetaDataByPath<MetaData>(routePath, {
      exampleSortParams,
      exampleListRequestValue,
      exampleListColWidths,
    });
  },
  { equalityFn: shallow }
);
