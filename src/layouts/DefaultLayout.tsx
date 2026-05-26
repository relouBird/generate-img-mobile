import { Slot, useRouter } from "expo-router";
import { ConversationSidebar } from "@/components/conversations/ConversationSidebar";
import { useStore } from "zustand";
import { useConversationStore } from "@/stores/conversation.store";
import { useEffect, useRef, useState } from "react";
import {
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import MobileTopBar from "@/components/display/MobileTopBar";
import { Colors } from "@/constants/themes";
import { useColorThemeScheme } from "@/hooks/theme-context";

/**
 * Layout de base sans topbar ni sidebar.
 * Utilisé par ConversationsPage (et potentiellement d'autres pages).
 * AuthLayout pourra étendre ce même pattern plus tard.
 */
export function DefaultLayout() {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const {
    fetchAllConversations,
    clearActiveConversation,
    isInitalized: isInitialized,
  } = useStore(useConversationStore);

  const { theme } = useColorThemeScheme();
  const themeKey = theme === "dark" ? "dark" : "light";
  const colors = Colors[themeKey];

  const navigate = useRouter();

  // Valeurs réactives
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const styles = getStyles(colors.palette.background.soft50);

  // Charge la liste des conversations au montage
  useEffect(() => {
    if (!isInitialized) {
      navigate.push("/loading");
    }
    fetchAllConversations();
  }, [fetchAllConversations, isInitialized, navigate]);

  const handleNewConversation = () => {
    clearActiveConversation();
    setToggleSidebar(false);
  };

  const navigationView = () => (
    <View>
      {/* Sidebar */}
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

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <View style={styles.childContainer}>
          <MobileTopBar
            onToggleSidebar={() => {
              setToggleSidebar(!toggleSidebar);
            }}
          />
          <Slot />
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
}

function getStyles(bg: string) {
  return StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
      backgroundColor: bg,
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "OriginalSurfer-Regular",
    },
    childContainer: {
      display: "flex",
      height: "100%",
      overflow: "hidden",
    },
  });
}
