import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconMenu2, IconGhost } from "tabler-icons-react-native";

interface MobileTopBarProps {
  onToggleSidebar: () => void;
  onToggleIncognito?: () => void;
}

const MobileTopBar: React.FC<MobileTopBarProps> = ({
  onToggleSidebar,
  onToggleIncognito,
}) => {
  const [isIncognito, setIsIncognito] = useState(false);

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
          className="w-11 h-11 rounded-xl items-center justify-center active:opacity-70"
          accessibilityLabel="Menu"
        >
          <IconMenu2 size={24} color="#0A3625" />
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
          <IconGhost size={28} color={isIncognito ? "#ffffff" : "#0A3625"} />

          {/* Indicator */}
          {isIncognito && (
            <View className="absolute top-1 right-1 w-3 h-3 rounded-full bg-purple-400" />
          )}
        </Pressable>
      </View>

      {/* Incognito banner */}
      {isIncognito && (
        <View className="px-4 py-2 border-b border-neutral-800 bg-primary-500">
          <View className="flex-row items-center justify-center gap-2">
            <IconGhost size={14} color="#F6F8E8" />

            <Text className="text-xs text-background-soft-50">
              Navigation privée activée
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MobileTopBar;
