import { MD3LightTheme as DefaultTheme, MD3Theme } from "react-native-paper"
import { colors } from "./colors"

export const theme: MD3Theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    ...DefaultTheme.colors,
    // Specify custom property in nested object
    colors: {
        primary: colors.primary,
        secondary: colors.secondary,
    },
}
