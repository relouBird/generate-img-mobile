import { DarkTheme, DefaultTheme, Slot, ThemeProvider } from "expo-router";
import { useColorScheme } from "react-native";

import { useConversationStore } from "@/stores/conversation.store";
import { useStore } from "zustand";
import { useFonts } from "expo-font";

import dmSansRegular from "@/assets/fonts/dm-sans-latin-400-normal.ttf";
import surferRegular from "@/assets/fonts/original-surfer-latin-400-normal.ttf";

import "../global.css";
import { LoadingLayout } from "@/layouts/LoadingLayout";
import { useColorThemeScheme } from "@/hooks/theme-context";
import { DefaultLayout } from "@/layouts/DefaultLayout";
// Attend le chargement

export default function TabLayout() {
  const { theme } = useColorThemeScheme();

  const [fontsLoaded] = useFonts({
    "OriginalSurfer-Regular": surferRegular,
    "DMSans-Regular": dmSansRegular,
  });

  const { isInitalized } = useStore(useConversationStore);
  // const routeur = useRouter();

  if (!fontsLoaded) return null;
  return (
    <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
      {!isInitalized ? <LoadingLayout /> : <DefaultLayout />}
    </ThemeProvider>
  );
}
