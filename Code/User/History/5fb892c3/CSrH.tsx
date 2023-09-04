import { Image, ImageBackground, View } from "react-native"

interface ComponentProps {
    progress: number
}

export const SplashLoading: React.FC<ComponentProps> = ({ progress }) => {
    return (
        <View style={{ backgroundColor: "#53337D", flex: 1 }}>
            <ImageBackground source={require("/assets/splash.png")}></ImageBackground>
        </View>
    )
}
