import * as LZUTF8 from "lzutf8";
import { get, set, del } from "idb-keyval";
import { StateStorage } from "zustand/middleware";
import { PersistOptions } from "zustand/middleware/persist";

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

function replacer(key, value) {
  if (value instanceof Map) {
    return {
      dataType: "Map",
      value: Array.from(value.entries()), // or with spread: value: [...value]
    };
  }
  return value;
}
function reviver(key, value) {
  if (typeof value === "object" && value !== null) {
    if (value.dataType === "Map") {
      return new Map(value.value);
    }
  }
  return value;
}

export function getPersistSerializer<T>(storeName: string, storeVersion: number = 1): PersistOptions<T> {
  return {
    version: storeVersion,
    name: `store-${storeName}`,
    getStorage: () => storage,
    serialize: (state) => {
      return LZUTF8.compress(JSON.stringify(state, replacer), {
        outputEncoding: "StorageBinaryString",
      });
    },
    deserialize: (str) => {
      return JSON.parse(
        LZUTF8.decompress(str, {
          inputEncoding: "StorageBinaryString",
        }),
        reviver
      );
    },
  };
}
