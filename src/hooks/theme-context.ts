/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme as useNativeColorScheme } from "react-native";

export type ThemeMode = "light" | "dark";

export function useColorThemeScheme(): {
  theme: ThemeMode;
  setThemeMode: (mode: ThemeMode) => Promise<void>;
} {
  const systemScheme = useNativeColorScheme();

  const [theme, setTheme] = useState<ThemeMode>(
    systemScheme === "dark" ? "dark" : "light",
  );

  async function setThemeMode(mode: ThemeMode) {
    await AsyncStorage.setItem("theme-mode", mode);
    setTheme(mode);
  }

  useEffect(() => {
    AsyncStorage.getItem("theme-mode").then((value) => {
      if (value === "dark") {
        setTheme("dark");
      } else if (value === "light") {
        setTheme("light");
      } else {
        setTheme(systemScheme === "dark" ? "dark" : "light");
      }
    });
  }, [systemScheme]);

  return {
    theme,
    setThemeMode,
  };
}
