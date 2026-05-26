import { useConversationStore } from "@/stores/conversation.store";
import { useEffect } from "react";
import { View, Text, useColorScheme } from "react-native";
import { Image } from "expo-image";
import { useRouter, Slot } from "expo-router";
import avoraLogo from "@/assets/logos/avora.png";
import { useStore } from "zustand";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/themes";
import { useColorThemeScheme } from "@/hooks/theme-context";

/**
 * Layout de base sans topbar ni sidebar.
 * Utilisé par ConversationsPage (et potentiellement d'autres pages).
 * AuthLayout pourra étendre ce même pattern plus tard.
 */
export function LoadingLayout() {
  const { isInitalized } = useStore(useConversationStore);
  const routeur = useRouter();

  const { theme } = useColorThemeScheme();
  const colors = Colors[theme === "light" ? "light" : theme];

  // Charge la liste des conversations au montage
  useEffect(() => {
    if (isInitalized) {
      const t = setTimeout(() => {
        routeur.push("/");
      }, 4000);
      return () => clearTimeout(t);
    }
  }, [isInitalized, routeur]);
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.palette.background.soft50,
          }}
        >
          <Image
            source={avoraLogo}
            contentFit="contain"
            style={{
              width: 120,
              height: 120,
            }}
          />
          <Text
            style={{
              color: colors.palette.text.title,
              fontFamily: "OriginalSurfer-Regular",
              fontSize: 32,
              fontWeight: "semibold",
            }}
          >
            Avora
          </Text>
          <Text
            style={{
              color: `${colors.palette.text.title}A9`,
              fontFamily: "DMSans-Regular",
              marginTop: 8,
              paddingBottom: 16,
            }}
          >
            Converse. Create Inspire
          </Text>
          <Slot />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
