import { Colors } from "@/constants/themes";
import { useColorThemeScheme } from "@/hooks/theme-context";
import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MenuIcon, GhostIcon } from "lucide-react-native";
import { useTheme } from "@/hooks/use-theme";
import { PText } from "../ui/PText";
import PulseComponent from "../ui/pulse-comp";

interface MobileTopBarProps {
  onToggleSidebar: () => void;
  onToggleIncognito?: () => void;
}
export default function MobileTopBar({
  onToggleSidebar,
  onToggleIncognito,
}: MobileTopBarProps) {
  const [isIncognito, setIsIncognito] = useState(false);

  const theme = useTheme();

  const handleIncognitoToggle = () => {
    setIsIncognito((prev) => !prev);
    onToggleIncognito?.();
  };

  return (
    <SafeAreaView edges={["top"]} className="bg-background-soft-50">
      {/* Topbar */}
      <View
        className={`h-16 flex-row items-center justify-between px-4 border-b ${
          isIncognito ? "border-neutral-800" : "border-background-soft-300"
        }`}
      >
        {/* Menu button */}
        <Pressable
          onPress={onToggleSidebar}
          className="w-11 h-11 rounded-xl items-center justify-center text-primary-500 active:opacity-70"
          accessibilityLabel="Menu"
        >
          <MenuIcon size={24} color={theme.palette.primary[500]} />
        </Pressable>

        {/* Incognito button */}
        <Pressable
          onPress={handleIncognitoToggle}
          accessibilityLabel={
            isIncognito ? "Désactiver le mode privé" : "Activer le mode privé"
          }
          className={`w-11 h-11 rounded-xl items-center justify-center relative ${
            isIncognito ? "bg-purple-600" : "bg-transparent"
          }`}
        >
          <GhostIcon
            size={28}
            color={isIncognito ? "#ffffff" : theme.palette.primary[500]}
          />

          {/* Indicator */}
          {isIncognito && (
            <View className="absolute -top-2 -right-3">
              <PulseComponent color="#8B5CF6">
                <View className="w-3 h-3 rounded-full bg-purple-400" />
              </PulseComponent>
            </View>
          )}
        </Pressable>
      </View>

      {/* Incognito banner */}
      {isIncognito && (
        <View className="px-4 py-2 border-b border-neutral-800 bg-primary-500">
          <View className="flex-row items-center justify-center gap-2">
            <GhostIcon size={14} color="#F6F8E8" />

            <PText className="text-xs background-soft-400">
              Navigation privée activée
            </PText>

            {/* <Text className="text-xs text-background-soft-50">
              Navigation privée activée
            </Text> */}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
