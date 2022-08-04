import * as LZUTF8 from "lzutf8";
import { get, set, del } from "idb-keyval";
import { StateStorage } from "zustand/middleware";

// Custom storage object
const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    // console.log(name, 'has been retrieved')
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    // console.log(name, 'with value', value, 'has been saved')
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    // console.log(name, 'has been deleted')
    await del(name);
  },
};

export function getPersistSerializer(storeName: string) {
  return {
    name: `store-${storeName}`,
    getStorage: () => storage,
    serialize: (state: any) =>
      LZUTF8.compress(JSON.stringify(state), {
        outputEncoding: "StorageBinaryString",
      }),
    deserialize: (str: any) => {
      return JSON.parse(
        LZUTF8.decompress(str, {
          inputEncoding: "StorageBinaryString",
        })
      );
    },
  };
}
