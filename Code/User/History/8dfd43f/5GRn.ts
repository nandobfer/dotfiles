export const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    ...DefaultTheme.colors,
    // Specify custom property in nested object
    colors: {
        myOwnColor: "#BADA55",
    },
}
