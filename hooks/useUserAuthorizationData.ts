import { userAuthData } from "@/utils/asyncStore";
import { useRouter } from "expo-router";
import React from "react";

export function useUserAuthorizationData() {
  const router = useRouter();
  const [userData, setUserData] = React.useState<any>(null);

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
