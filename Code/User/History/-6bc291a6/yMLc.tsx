import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { PaperProvider } from "react-native-paper"
import { Home } from "./src/screens/Home"

export default function App() {
    return (
        <PaperProvider>
            <StatusBar style="auto" />
            <Home />
            {/* <NavigationContainer>
            </NavigationContainer> */}
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
