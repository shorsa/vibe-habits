import { SplashScreen, Stack } from "expo-router";
import React from "react";
import * as SecureStore from "expo-secure-store";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  SecureStore.deleteItemAsync("authUser");

  return (
    <Stack initialRouteName="(main)">
      <Stack.Screen name="index" />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" options={{ title: "Page not found" }} />
    </Stack>
  );
}
