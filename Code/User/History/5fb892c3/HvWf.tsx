import { Image, ImageBackground, View } from "react-native"

interface ComponentProps {
    progress: number
}

export const SplashLoading: React.FC<ComponentProps> = ({ progress }) => {
    return (
        <View style={{ backgroundColor: "black", flex: 1 }}>
            <ImageBackground source={{ uri: "asset:/splash.png" }}></ImageBackground>
        </View>
    )
}
