import React from "react";
import { View, Text, Pressable } from "react-native";
import { IconMoon, IconSun } from "tabler-icons-react-native";

import { useTheme } from "@/hooks/use-theme";
import { useColorThemeScheme } from "@/hooks/theme-context";

export default function ThemeSelector() {
  const [isDark, setIsDark] = React.useState(false);

  const { setThemeMode } = useColorThemeScheme();
  const colors = useTheme();

  const handleThemeChange = async (dark: boolean) => {
    await setThemeMode(dark ? "dark" : "light");
    setIsDark(dark);
  };

  return (
    <View
      className="flex-row items-center justify-between rounded-2xl border p-2"
      style={{
        borderColor: colors.palette.background.soft300,
        backgroundColor: `${colors.palette.background.soft100}99`,
      }}
    >
      {/* Left */}
      <View className="flex-row items-center gap-3">
        <View
          className="h-9 w-9 items-center justify-center rounded-xl"
          style={{
            backgroundColor: colors.palette.background.soft200,
          }}
        >
          <IconSun size={18} color={colors.palette.foreground.soft500} />
        </View>

        <View>
          <Text
            className="text-sm font-medium"
            style={{
              color: colors.palette.foreground.soft300,
            }}
          >
            Thème
          </Text>
        </View>
      </View>

      {/* Right */}
      <View
        className="flex-row items-center gap-1 rounded-2xl p-1"
        style={{
          backgroundColor: colors.palette.background.soft200,
        }}
      >
        {/* Light */}
        <Pressable
          onPress={() => handleThemeChange(false)}
          className="h-9 w-9 items-center justify-center rounded-xl"
          style={{
            backgroundColor: !isDark
              ? colors.palette.background.soft50
              : "transparent",
          }}
        >
          <IconSun
            size={18}
            color={
              !isDark
                ? colors.palette.foreground.soft300
                : colors.palette.foreground.soft500
            }
          />
        </Pressable>

        {/* Dark */}
        <Pressable
          onPress={() => handleThemeChange(true)}
          className="h-9 w-9 items-center justify-center rounded-xl"
          style={{
            backgroundColor: isDark
              ? colors.palette.background.soft50
              : "transparent",
          }}
        >
          <IconMoon
            size={18}
            color={
              isDark
                ? colors.palette.foreground.soft300
                : colors.palette.foreground.soft500
            }
          />
        </Pressable>
      </View>
    </View>
  );
}
