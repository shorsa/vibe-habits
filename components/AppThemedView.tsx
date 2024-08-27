import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type AppThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function AppThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: AppThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
