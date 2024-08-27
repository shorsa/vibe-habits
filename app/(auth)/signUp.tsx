import { userAuthData } from "@/utils/asyncStore";
import { router, Link } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function SignUp() {
  const onSubmit = () => {
    userAuthData.set("authUser", "test");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>signUp</Text>
      <Button title="Register" onPress={onSubmit} />
    </View>
  );
}
