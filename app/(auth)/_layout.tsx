import { Stack } from "expo-router";
import { Text } from "react-native";
export default function AuthLayout() {
  return (
    <Stack
      initialRouteName="signIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="[user]" options={{ headerTitle: "User" }} />
      <Stack.Screen name="signIn" />
      <Stack.Screen name="signUp" />
    </Stack>
  );
}
