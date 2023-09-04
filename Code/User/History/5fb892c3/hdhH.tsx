import { useEffect } from "react"
import { Image, ImageBackground, View } from "react-native"
import * as SplashScreen from "expo-splash-screen"

interface ComponentProps {
    progress: number
}

export const SplashLoading: React.FC<ComponentProps> = ({ progress }) => {
    useEffect(async () => {
        await SplashScreen.hideAsync()
    }, [])

    return (
        <View style={{ backgroundColor: "#53337D", flex: 1 }}>
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../assets/splash.png")}></ImageBackground>
        </View>
    )
}
