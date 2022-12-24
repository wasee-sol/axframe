import create from "zustand";
import { ExampleSaveRequest, ExampleSaveResponse } from "@core/services/example/ExampleRepositoryInterface";
import { ExampleService } from "services";
import { errorDialog } from "@core/components/dialogs/errorDialog";
import { usePageTabStore } from "@core/stores/usePageTabStore";
import { subscribeWithSelector } from "zustand/middleware";
import shallow from "zustand/shallow";
import { DefaultPageStoreActions, StoreActions } from "@core/stores/types";

interface APIRequest extends ExampleSaveRequest {}
interface APIResponse extends ExampleSaveResponse {}

interface MetaData {
  exampleSaveRequestValue: APIRequest;
}

interface States extends MetaData {
  routePath?: string; // initialized Store;
  exampleSaveSpinning: boolean;
}

interface Actions extends DefaultPageStoreActions {
  setExampleSaveRequestValue: (exampleSaveRequestValue: APIRequest) => void;
  setExampleSaveSpinning: (exampleSaveSpinning: boolean) => void;
  callExampleSaveApi: (request?: APIRequest) => Promise<void>;
}

// create states
const _exampleFormRequestValue = {};
const createState: States = {
  exampleSaveRequestValue: { ..._exampleFormRequestValue },
  exampleSaveSpinning: false,
};

// create actions
const createActions: StoreActions<States & Actions, Actions> = (set, get) => ({
  setExampleSaveRequestValue: (exampleSaveRequestValue) => {
    set({ exampleSaveRequestValue });
  },
  setExampleSaveSpinning: (exampleSaveSpinning) => set({ exampleSaveSpinning }),
  callExampleSaveApi: async (request) => {
    await set({ exampleSaveSpinning: true });

    try {
      const apiParam = request ?? get().exampleSaveRequestValue;
      const response = await ExampleService.save(apiParam);

      console.log(response);

      // set({});
      get().reset();
    } catch (e) {
      await errorDialog(e as any);
    } finally {
      await set({ exampleSaveSpinning: false });
    }
  },
  syncMetadata: (metaData) => {
    if (metaData) {
      console.log(`apply metaData Store : useExampleFormStore`);
      set({
        exampleSaveRequestValue: metaData.exampleSaveRequestValue,
      });
    } else {
      console.log(`clear metaData Store : useExampleFormStore`);
      set({ exampleSaveRequestValue: undefined });
    }
  },
  init: async (routePath) => {
    const metaData = usePageTabStore.getState().getTabMetaDataByPath(routePath);
    if (metaData) get().syncMetadata(metaData);

    set({ routePath });
  },
  reset: async () => {
    const routePath = get().routePath;
    if (!routePath) return;

    usePageTabStore.getState().setTabMetaDataByPath(routePath, {});
    get().syncMetadata();
  },
  destroy: () => {
    unSubscribeExampleFormStore();
  },
});

// ---------------- exports
export interface ExampleFormStore extends States, Actions {}
export const useExampleFormStore = create(
  subscribeWithSelector<ExampleFormStore>((set, get) => ({
    ...createState,
    ...createActions(set, get),
  }))
);

// pageModel 에 저장할 대상 모델 셀렉터 정의
export const unSubscribeExampleFormStore = useExampleFormStore.subscribe(
  (s) => [s.exampleSaveRequestValue],
  ([exampleSaveRequestValue]) => {
    const routePath = useExampleFormStore.getState().routePath;
    if (!routePath) return;
    console.log(`Save metaData '${routePath}', Store : useExampleFormStore`);

    usePageTabStore.getState().setTabMetaDataByPath<MetaData>(routePath, {
      exampleSaveRequestValue,
    });
  },
  { equalityFn: shallow }
);
