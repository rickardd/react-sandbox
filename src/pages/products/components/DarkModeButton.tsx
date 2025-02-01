import { useEffect } from "react";
import { useStore } from "../store/useStore";

export const DarModeButton = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const setDarkMode = useStore((state) => state.setDarkMode);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return <a onClick={toggleTheme}>Toggle {isDarkMode ? "Light" : "Dark"} Mode</a>;
};
