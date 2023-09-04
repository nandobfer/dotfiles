import { Image, View } from "react-native"

interface ComponentProps {
    progress: number
}

export const SplashLoading: React.FC<ComponentProps> = ({ progress }) => {
    return (
        <View style={{ backgroundColor: "#53337D" }}>
            <Image source={require("../../assets/splash.png")} />
        </View>
    )
}
