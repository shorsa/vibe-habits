import { AppThemedText } from "@/components/AppThemedText";
import { AppThemedView } from "@/components/AppThemedView";
import { userAuthData } from "@/utils/asyncStore";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function SignIn() {
  const router = useRouter();

  const handleRedirectToSignUp = () => {
    router.push("/(auth)/signUp");
  };

  const onSubmit = () => {
    userAuthData.set("authUser", "test");
    router.replace("/(main)/first");
  };

  return (
    <AppThemedView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>signIn</Text>
      <AppThemedText onPress={() => router.push("/ivan")}>Go to Ivan</AppThemedText>

      <Button title="sign In" onPress={onSubmit} />
      <Button title="signUp" onPress={handleRedirectToSignUp} />
    </AppThemedView>
  );
}
