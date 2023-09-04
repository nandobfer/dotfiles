import { Image, Text, View } from "react-native"

interface ComponentProps {
    progress: number
}

export const SplashLoading: React.FC<ComponentProps> = ({ progress }) => {
    return (
        <View>
            <Text>oi</Text>
            <Image source={require("../../assets/splash.png")} />
        </View>
    )
}
