import { View, Text, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { Slot } from "expo-router";
import avoraLogo from "@/assets/logos/avora.png";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/themes";
import { useColorThemeScheme } from "@/hooks/theme-context";

/**
 * Layout de base sans topbar ni sidebar.
 * Utilisé par ConversationsPage (et potentiellement d'autres pages).
 * AuthLayout pourra étendre ce même pattern plus tard.
 */
export function LoadingLayout() {
  const { height } = useWindowDimensions();

  const { theme } = useColorThemeScheme();
  const colors = Colors[theme === "light" ? "light" : theme];

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          width: "100%",
          height,
        }}
      >
        <View
          style={{
            height,
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
