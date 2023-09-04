import { useDarkMode } from "./useDarkMode"

export const useColors = () => {
    const { darkMode } = useDarkMode()

    return {
        primary: darkMode ? "" : "#6EC1E4",
    }
}
