import { Stack, Tabs } from "expo-router";

export default function MainLayout() {
  return (
    <Tabs
      initialRouteName="signIn"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen name="first" />
      <Tabs.Screen name="second" />
    </Tabs>
  );
}
