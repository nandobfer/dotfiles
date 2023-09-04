import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { PaperProvider } from "react-native-paper"


export default function App() {
    const Stack = createNativeStackNavigator()
    const navigator_options: NativeStackNavigationOptions = {
        headerStyle: {
            backgroundColor: colors.secondary,
        },
        headerTintColor: colors.primary,
        headerTitleStyle: {
            fontWeight: "bold",
        },
        headerTitleAlign: "center",
        animation: "slide_from_right",
    }
    const home_header_options = {
        title: "Casa Lúdica alguma coisa",
        headerShown: false,
    }

    return (
        <PaperProvider>
            <StatusBar style="auto" />
            
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
