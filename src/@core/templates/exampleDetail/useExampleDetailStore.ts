import create from "zustand";
import {
  ExampleItem,
  ExampleSaveRequest,
  ExampleSaveResponse,
} from "@core/services/example/ExampleRepositoryInterface";
import { ExampleService } from "services";
import { errorDialog } from "@core/components/dialogs/errorDialog";
import { setMetaDataByPath } from "@core/stores/usePageTabStore";
import { subscribeWithSelector } from "zustand/middleware";
import shallow from "zustand/shallow";
import { StoreActions, PageStoreActions } from "@core/stores/types";
import { pageStoreActions } from "@core/stores/pageStoreActions";

interface APIRequest extends ExampleSaveRequest {}
interface APIResponse extends ExampleSaveResponse {}

interface MetaData {
  exampleDetailRequestValue: APIRequest;
}

interface States extends MetaData {
  routePath?: string; // initialized Store;
  exampleDetailSpinning: boolean;
  exampleDetail?: ExampleItem;
}

interface Actions extends PageStoreActions {
  setExampleDetailRequestValue: (exampleSaveRequestValue: APIRequest) => void;
  setExampleDetailSpinning: (exampleSaveSpinning: boolean) => void;
  callExampleDetailApi: (request?: APIRequest) => Promise<void>;
}

// create states
const _exampleDetailRequestValue = {};
const state: States = {
  exampleDetailRequestValue: { ..._exampleDetailRequestValue },
  exampleDetailSpinning: false,
};

// create actions
const createActions: StoreActions<States & Actions, Actions> = (set, get) => ({
  setExampleDetailRequestValue: (exampleDetailRequestValue) => {
    set({ exampleDetailRequestValue });
  },
  setExampleDetailSpinning: (exampleDetailSpinning) => set({ exampleDetailSpinning }),
  callExampleDetailApi: async (request) => {
    await set({ exampleDetailSpinning: true });

    try {
      const apiParam = request ?? get().exampleDetailRequestValue;
      const response = await ExampleService.detail(apiParam);

      console.log(response);

      set({ exampleDetail: response.rs });
    } catch (e) {
      await errorDialog(e as any);
    } finally {
      await set({ exampleDetailSpinning: false });
    }
  },
  syncMetadata: (metaData) => {
    console.log("metaData", metaData);
    if (metaData) {
      console.log(`apply metaData Store : useExampleFormStore`);
      set({
        exampleDetailRequestValue: metaData.exampleSaveRequestValue,
      });
    } else {
      console.log(`clear metaData Store : useExampleFormStore`);
      set({ exampleDetailRequestValue: undefined });
    }
  },
  ...pageStoreActions(set, get, () => unSubscribeExampleDetailStore()),
});

// ---------------- exports
export interface ExampleDetailStore extends States, Actions {}
export const useExampleDetailStore = create(
  subscribeWithSelector<ExampleDetailStore>((set, get) => ({
    ...state,
    ...createActions(set, get),
  }))
);

// pageModel 에 저장할 대상 모델 셀렉터 정의
export const unSubscribeExampleDetailStore = useExampleDetailStore.subscribe(
  (s) => [s.exampleDetailRequestValue],
  ([exampleDetailRequestValue]) => {
    const routePath = useExampleDetailStore.getState().routePath;
    if (!routePath) return;
    console.log(`Save metaData '${routePath}', Store : useExampleFormStore`);

    setMetaDataByPath<MetaData>(routePath, {
      exampleDetailRequestValue,
    });
  },
  { equalityFn: shallow }
);
