import buildStore from "stores/buildStore";

export interface Tab01Store {
  title: string;
  setTitle: (title: string) => void;
}

export const useTab01Store = buildStore<Tab01Store>("tab01", (set, get) => ({
  title: "I am Title",
  setTitle: (title) => set({ title }),
}));
