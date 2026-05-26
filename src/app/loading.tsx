import { LoadingState } from "@/components/ui/LoadingState";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useStore } from "zustand";
import { useConversationStore } from "@/stores/conversation.store";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function LoadingPage() {
  const { isInitialized } = useStore(useConversationStore);
  const routeur = useRouter();

  useEffect(() => {
    if (isInitialized) {
      const t = setTimeout(() => {
        routeur.push("/");
      }, 4000);
      return () => clearTimeout(t);
    }
  }, [isInitialized, routeur]);

  return (
    <SafeAreaProvider>
      <LoadingState />
    </SafeAreaProvider>
  );
}
