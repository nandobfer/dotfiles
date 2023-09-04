import { createTheme } from "@mui/material"
import colors from "../style/colors"
import { useDarkMode } from "./useDarkMode"
import { useMemo } from "react"

export const useMuiTheme = () => {
    const { darkMode } = useDarkMode()

    const THEME = useMemo(() => {
        console.log(darkMode)

        return createTheme({
            typography: {
                fontFamily: ["Montserrat"].join(","),
            },
            palette: {
                mode: darkMode ? "dark" : "light",

                primary: {
                    main: colors.primary,
                },
                secondary: {
                    main: colors.secondary,
                },

                // text: {
                //     primary: colors.text.primary,
                // },
            },
        })
    }, [darkMode])

    return THEME
}
