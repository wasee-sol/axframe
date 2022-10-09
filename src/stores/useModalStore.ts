import create from "zustand";
import { v4 as uuidv4 } from "uuid";

export type ModalFactory<T> = (open: boolean, resolve: (value: T) => void, reject: (reason?: any) => void) => any;

interface IModalModel<T = any> {
  id: string;
  modalFactory?: ModalFactory<T>;
}

export class ModalModelClass {
  public modal: IModalModel;
  public visible: boolean = true;

  public params: unknown;
  public resolve?: (value?: unknown) => void;
  public reject?: (reason?: unknown) => void;

  public constructor(value: IModalModel) {
    this.modal = value;
  }
}

export interface ModalModel {
  modals: Map<string, ModalModelClass>;
}

export interface ModalActions {
  openModal: <T = void>(modalFactory: ModalFactory<T>) => Promise<T>;
  closeModal: (id?: string) => void;
}

export interface ModalStore extends ModalModel, ModalActions {}

export const useModalStore = create<ModalStore>((set, get) => ({
  modals: new Map(),
  openModal: <T = void>(modalFactory) => {
    return new Promise<T>((resolve, reject) => {
      const id = uuidv4();
      const modal = new ModalModelClass({ id, modalFactory });

      modal.resolve = (value) => {
        resolve(value as T);
      };
      modal.reject = (reason) => {
        reject(reason);
      };

      set({ modals: new Map([...get().modals]) });
    });
  },
  closeModal: (id) => {
    if (id) {
      get().modals.delete(id);
    } else {
      get().modals.clear();
    }

    set({ modals: new Map([...get().modals]) });
  },
}));
