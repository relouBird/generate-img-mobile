import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import { useColorScheme, View } from "react-native";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
// import AppTabs from '@/components/app-tabs';

import { useFonts } from "expo-font";

import dmSansRegular from "@/assets/fonts/dm-sans-latin-400-normal.ttf";
import surferRegular from "@/assets/fonts/original-surfer-latin-400-normal.ttf";

import "../global.css";
import { LoadingLayout } from "@/layouts/LoadingLayout";
// Attend le chargement

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    "OriginalSurfer-Regular": surferRegular,
    "DMSans-Regular": dmSansRegular,
  });

  if (!fontsLoaded) return null;
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <LoadingLayout />
    </ThemeProvider>
  );
}
