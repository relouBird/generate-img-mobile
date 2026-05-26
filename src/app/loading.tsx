import { LoadingState } from "@/components/ui/LoadingState";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function LoadingPage() {
  return (
    <SafeAreaProvider>
      <LoadingState />
    </SafeAreaProvider>
  );
}
