import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { PaperProvider } from "react-native-paper"
import { Home } from "./src/screens/Home"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
    const Stack = createNativeStackNavigator()

    return (
        <PaperProvider>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack
            </NavigationContainer>
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
