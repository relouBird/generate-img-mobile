import { useState } from "react";
import { useStore } from "zustand/react";
import { useConversationStore } from "@/stores/conversation.store";
import { ConversationItem } from "./ConversationItem";
import ThemeSelector from "../ui/ThemeSelector";
import { View, Text, Pressable, TextInput } from "react-native";
import Svg, { Path } from "react-native-svg";

// Image
import { Image } from "expo-image";
import avoraLogo from "@/assets/logos/avora.png";

import { PlusIcon as IconPlus } from "lucide-react-native";

type Props = {
  onNewConversation: () => void;
  onClose?: () => void;
};

export default function ConversationSidebar({
  onNewConversation,
  onClose,
}: Props) {
  const [search, setSearch] = useState("");

  const {
    conversations,
    activeConversationId,
    isLoading,
    selectConversation,
    clearState,
  } = useStore(useConversationStore);

  const filtered = conversations.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  const logout = () => {
    clearState();
  };

  return (
    <View
      className={`relative flex-1 flex flex-col w-64 shrink-0 h-screen border-r border-base-200 bg-background-soft-100`}
    >
      {/* Header avec bouton de fermeture mobile */}
      <View className="flex items-center justify-between px-4 py-4 border-b border-base-200">
        <View className="flex items-center gap-0">
          <Image
            source={avoraLogo}
            contentFit="contain"
            style={{
              width: 40,
              height: 40,
            }}
          />

          <Text className="text-lg font-semibold text-title-50">
            Conversations
          </Text>
        </View>

        <View className="flex items-center gap-2">
          <Pressable
            onPress={onNewConversation}
            className="w-7 h-7 rounded-lg bg-primary-50 border border-primary-500/50 items-center justify-center active:opacity-70"
          >
            <IconPlus size={14} color="#0A3625" />
          </Pressable>
        </View>
      </View>

      {/* Search */}
      <View className="px-3 py-3">
        <TextInput
          className="w-full px-3 py-1.5 text-sm rounded-lg border border-base-200 bg-background-soft-50 text-title-50 placeholder:text-foreground-soft-400 focus:outline-none focus:ring-1 focus:ring-primary-300 transition"
          onChangeText={(e) => setSearch(e)}
          value={search}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </View>

      {/* Liste */}
      <View className="flex-1 max-h-11/12 overflow-y-auto px-2 pb-4 space-y-0.5">
        {isLoading && conversations.length === 0 && (
          <View className="space-y-1.5 px-1 pt-1">
            {[...Array(4)].map((_, i) => (
              <View
                key={i}
                className="h-9 rounded-lg bg-background-soft-100 animate-pulse"
              />
            ))}
          </View>
        )}

        {!isLoading && filtered.length === 0 && (
          <View className="px-2">
            <Text className="text-xs text-foreground-soft-400 text-center mt-8">
              {search ? "Aucun résultat" : "Aucune conversation"}
            </Text>
          </View>
        )}

        {filtered.map((conv) => (
          <ConversationItem
            key={conv.id}
            conversation={conv}
            isActive={conv.id === activeConversationId}
            onClick={(id) => {
              selectConversation(id);
              // Fermer la sidebar sur mobile après sélection
              if (window.innerWidth < 768 && onClose) {
                onClose();
              }
            }}
          />
        ))}
      </View>

      {/*Choix de théme et Logout*/}
      <View className="px-3 py-3 border-t border-base-200 space-y-2">
        {/* Theme selector */}
        <ThemeSelector />

        {/* Logout button */}
        <Pressable
          onPress={() => {
            logout();
          }}
          className="w-full flex items-center gap-2 p-2 rounded-lg bg-transparent text-red-700 border border-red-700/70 hover:bg-red-700/5 focus-visible:hidden outline-none focus:ring-0 focus:ring-transparent transition-colors"
        >
          <Svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </Svg>
          <Text className="text-sm">Déconnexion</Text>
        </Pressable>
      </View>
    </View>
  );
}
