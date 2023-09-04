import { Image, View } from "react-native"

interface ComponentProps {
    progress: number
}

export const SplashLoading: React.FC<ComponentProps> = ({ progress }) => {
    return (
        <View>
            <Image source={{ uri: require("../../assets/splash.png") }} />
        </View>
    )
}
