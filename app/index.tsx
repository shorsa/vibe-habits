import { userAuthData } from "@/utils/asyncStore";
import { router } from "expo-router";
import React from "react";

export default function Index() {
  React.useEffect(() => {
    const getAuthUser = async () => {
      const userData = await userAuthData.get("authUser");
      if (!userData) {
        router.replace("/(auth)/signIn");
      } else {
        router.replace("/(main)/first");
      }
    };
    
    getAuthUser();
  }, []);
}
