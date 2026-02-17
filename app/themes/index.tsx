import { useThemeChangerContext } from "@/presentation/context/ThemeChangerContext";
import { ThemedCard } from "@/presentation/shared/ThemedCard";
import { ThemedSwitch } from "@/presentation/shared/ThemedSwitch";
import { ThemedView } from "@/presentation/shared/ThemedView";
import { useState } from "react";

const ThemesScreen = () => {/* 
  const { colorScheme, setColorScheme } = useColorScheme(); */

  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } = useThemeChangerContext()

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === "dark",
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {

    /* setColorScheme(value ? 'dark' : 'light') */

    toggleTheme()

    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    });
  };

  const setSystemMode = (value: boolean) => {
    if(value) {
      setSystemTheme()
    }

    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    });
  };

  return (
    <ThemedView className="m-5">
      <ThemedCard className="mt-5">
        <ThemedSwitch
          onValueChange={setDarkMode}
          value={darkModeSettings.darkMode}
          text="Dark Mode"
          className="mb-5"
        />

        <ThemedSwitch
          onValueChange={setSystemMode}
          value={darkModeSettings.systemMode}
          text="System Mode"
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
