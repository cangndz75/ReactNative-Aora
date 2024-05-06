import React from "react";
import { SplashScreen, Stack } from "expo-router";
import GlobalProvider from "../context/GlobalProvider";
const RooyLayout = () => {
  return (
    <GlobalProvider>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    </GlobalProvider>
  );
};

export default RooyLayout;
