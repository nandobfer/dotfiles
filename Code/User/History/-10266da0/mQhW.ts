import { StyleSheet, Dimensions } from "react-native"

const vw = Dimensions.get("window").width / 100

export const styles = StyleSheet.create({
    text: {
        padding: 5,
        color: "white",
        fontWeight: "bold",
        textShadowColor: "#000",
        textShadowOffset: { height: 0, width: 0 },
        textShadowRadius: 10,
    },
})
