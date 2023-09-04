import { Image, ImageBackground, View } from "react-native"

interface ComponentProps {
    progress: number
}

export const SplashLoading: React.FC<ComponentProps> = ({ progress }) => {
    return (
        <View style={{ backgroundColor: "#53337D", flex: 1 }}>
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../assets/splash.png")}></ImageBackground>
            <ProgressBar progress={0.5} color={MD3Colors.error50} />
        </View>
    )
}
