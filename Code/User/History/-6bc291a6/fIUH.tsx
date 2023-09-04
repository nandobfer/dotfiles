import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { PaperProvider } from "react-native-paper"
import { Home } from "./src/screens/Home"
import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack"
import { colors } from "./src/style/colors"

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
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={navigator_options}>
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
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
