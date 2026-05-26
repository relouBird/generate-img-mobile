import { Slot } from "expo-router";
import { useStore } from "zustand";
import { useConversationStore } from "@/stores/conversation.store";
import { useEffect, useRef, useState } from "react";
import {
  DrawerLayoutAndroid,
  StyleSheet,
  View,
  Text,
  Platform,
} from "react-native";

import ConversationSidebar from "@/components/conversations/ConversationSidebar";
import MobileTopBar from "@/components/display/MobileTopBar";
import { Colors } from "@/constants/themes";
import { useColorThemeScheme } from "@/hooks/theme-context";
import ConversationSidebarWeb from "@/components/conversations/ConversationSidebarWeb";

/**
 * Layout de base sans topbar ni sidebar.
 * Utilisé par ConversationsPage (et potentiellement d'autres pages).
 * AuthLayout pourra étendre ce même pattern plus tard.
 */
export const DefaultLayout = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const { clearActiveConversation } = useStore(useConversationStore);

  const { theme } = useColorThemeScheme();
  const themeKey = theme === "dark" ? "dark" : "light";
  const colors = Colors[themeKey];

  // Valeurs réactives
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const styles = getStyles(colors.palette.background.soft50);

  const handleNewConversation = () => {
    clearActiveConversation();
    setToggleSidebar(false);
  };

  const navigationView = () => (
    <View>
      <ConversationSidebar
        onClose={() => setToggleSidebar(false)}
        onNewConversation={handleNewConversation}
      />
    </View>
  );

  useEffect(() => {
    if (toggleSidebar) {
      drawer.current?.openDrawer();
    } else {
      drawer.current?.closeDrawer();
    }
  }, [toggleSidebar]);

  if (Platform.OS !== "android") {
    // Sur iOS et Web, tu n’utilises pas DrawerLayoutAndroid
    return (
      <View className="min-h-screen bg-background-soft-50 font-surfer">
        <View className="flex h-screen overflow-hidden">
          <MobileTopBar
            onToggleSidebar={() => {
              setToggleSidebar(!toggleSidebar);
            }}
          />
          {/* Sidebar */}
          <ConversationSidebarWeb
            sideview={toggleSidebar}
            onClose={() => setToggleSidebar(false)}
            onNewConversation={handleNewConversation}
          />
          <Slot />
        </View>
      </View>
    );
  }

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <View style={styles.childContainer}>
          <MobileTopBar
            onToggleSidebar={() => {
              setToggleSidebar(!toggleSidebar);
            }}
          />
          <Text>Test sans composants</Text>
          <Slot />
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
};

function getStyles(bg: string) {
  return StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
      backgroundColor: bg,
      alignItems: "center",
      justifyContent: "center",
    },
    childContainer: {
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
  });
}
