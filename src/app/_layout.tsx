import { DarkTheme, DefaultTheme, ThemeProvider, useRouter } from "expo-router";
import { useStore } from "zustand";
import { useFonts } from "expo-font";

import { Nativethemes } from "@/constants/themes/nativewind";

import { useConversationStore } from "@/stores/conversation.store";
import { useColorThemeScheme } from "@/hooks/theme-context";
import { LoadingLayout } from "@/layouts/LoadingLayout";
import { DefaultLayout } from "@/layouts/DefaultLayout";

import dmSansRegular from "@/assets/fonts/dm-sans-latin-400-normal.ttf";
import surferRegular from "@/assets/fonts/original-surfer-latin-400-normal.ttf";

import ErrorBoundary from "react-native-error-boundary";

import "@/global.css";
import { useEffect } from "react";
import { View } from "react-native";

export default function RootLayout() {
  const { theme } = useColorThemeScheme();

  const [fontsLoaded] = useFonts({
    "OriginalSurfer-Regular": surferRegular,
    "DMSans-Regular": dmSansRegular,
  });

  const { isInitialized, fetchAllConversations, clearActiveConversation } =
    useStore(useConversationStore);

  const navigate = useRouter();

  if (!fontsLoaded) return null;

  if (__DEV__) {
    console.log("Theme actuel:", theme);
    console.log("Conversations initialisées:", isInitialized);
  }

  // Charge la liste des conversations au montage
  useEffect(() => {
    if (!isInitialized) {
      navigate.push("/loading");
    }
    fetchAllConversations();
  }, [fetchAllConversations, isInitialized, navigate]);

  return (
    <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
      <View
        style={
          theme === "dark" ? Nativethemes.nativeDark : Nativethemes.nativeLight
        }
        className="flex-1"
      >
        {isInitialized ? <DefaultLayout /> : <LoadingLayout />}
      </View>
    </ThemeProvider>
  );
}
