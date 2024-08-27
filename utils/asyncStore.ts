import * as SecureStore from "expo-secure-store";

export const userAuthData = {
  get: async (key: string) => {
    const value = await SecureStore.getItem(key);
    return value;
  },
  set: async (key: string, value: string) => {
    await SecureStore.setItem(key, value);
  },
};
