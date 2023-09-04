import { useDarkMode } from "./useDarkMode"

export const useColors = () => {
    const { darkMode } = useDarkMode()

    return {
        primary: darkMode ? "#0078D4" : "#ffffff",
        secondary: darkMode ? "#D9D9D9" : "#6EC1E4",
        background: darkMode ? "#1F1F1F" : "#6EC1E4",
    }
}
