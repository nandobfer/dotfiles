import React from "react"
import { BackHandler, Dimensions, Platform, View, Image, ImageBackground } from "react-native"
import { Button } from "../components/Button"
import { NavigationProp } from "@react-navigation/native"
import { routes } from "../routes"
import images from "./Gallery/images"

interface HomeProps {
    navigation: NavigationProp<any, any>
}

export const Home: React.FC<HomeProps> = ({ navigation }) => {
    const maxHeight = Dimensions.get("window").height
    const maxWidth = Dimensions.get("window").height

    return (
        <ImageBackground source={images.background.dots} style={{}}>
            <View style={{ height: "100%", justifyContent: "space-between" }}>
                <View
                    style={{
                        padding: 20,
                        paddingTop: "5%",
                        alignItems: "center",
                        gap: 30,
                    }}
                >
                    <Image source={images.logo} style={{ width: 160, height: 160, resizeMode: "contain" }} />
                    <Image source={images.theme} style={{ width: 280, height: 200, resizeMode: "contain" }} />
                </View>

                <ImageBackground
                    source={images.background.clouds}
                    style={{
                        height: 360,
                        maxWidth: maxWidth,
                        alignItems: "center",
                        gap: 15,

                        paddingTop: "33.8%",
                    }}
                    resizeMode="cover"
                >
                    <Button mode="contained" onPress={() => navigation.navigate('gallery')} textVariant="displayMedium">
                        Catálogo
                    </Button>
                    {Platform.OS != "ios" && (
                        <Button mode="contained" onPress={() => BackHandler.exitApp()} textVariant="headlineSmall">
                            Sair
                        </Button>
                    )}
                </ImageBackground>
            </View>
        </ImageBackground>
    )
}
