import { useDarkMode } from "./useDarkMode"

export const useColors = () => {
    const { darkMode } = useDarkMode()

    return {
        secondary: darkMode ? "#8CDCFE" : "#00AFEF",
        primary: darkMode ? "#0078D4" : "#ffffff",
        terciary: darkMode ? "#D9D9D9" : "#1F1F1F",

        background: {
            primary: darkMode ? "#1F1F1F" : "#ffffff",
            secondary: darkMode ? "#181818" : "#00AFEF",
        },

        text: {
            primary: darkMode ? "#8CDCFE" : "#00AFEF",
            secondary: darkMode ? "#0078D4" : "#ffffff",
            terciary: darkMode ? "#D9D9D9" : "#1F1F1F",
        },
    }
}
