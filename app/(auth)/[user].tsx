import { useIsFocused } from "@react-navigation/native";
import {
  router,
  Link,
  useLocalSearchParams,
  useFocusEffect,
} from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function User() {
  const isFocused = useIsFocused();

  const {
    // The route parameter
    user,
    // An optional search parameter.
    tab,
  } = useLocalSearchParams<{ user: string; tab: string }>();

  React.useEffect(() => {
    console.log("==========START========");
    console.log("\x1b[42m%s\x1b[0m", `isFocused`, isFocused);
    console.log("==========END==========");
  }, [isFocused]);

  useFocusEffect(() => {
    console.log("==========START========");
    console.log("\x1b[42m%s\x1b[0m", `useFocusEffect`);
    console.log("==========END==========");
  });

  React.useEffect(() => {}, [user]);

  return (
    <View>
      <Text onPress={() => router.setParams({ user: "evan", tab: "evan tab" })}>
        Go to Evan
      </Text>
      <Text onPress={() => router.push("/mark?tab=test" as any)}>
        Go Ssto Mark
      </Text>
      <Link href={"/charlie"}>Go to Charlie</Link>
    </View>
  );
}
