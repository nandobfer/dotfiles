import React from "react"
import { BackHandler, Dimensions, Platform, View, Image, ImageBackground } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import { routes } from "../routes"
import images from "./Gallery/images"
import { Button } from "react-native-paper"
import { colors } from "../style/colors"

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
                    <Image source={images.logo} style={{ width: 240, height: 160, resizeMode: "contain" }} />
                    <Image source={images.theme} style={{ width: 330, height: 200, resizeMode: "contain" }} />
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
                    <Button
                        buttonColor={colors.primary}
                        onPress={() => navigation.navigate(routes.gallery.name)}
                        labelStyle={{ fontSize: 30, padding: 0 }}
                        style={{ height: 70, borderRadius: 50, justifyContent: "center", alignItems: "center" }}
                        textColor="white"
                    >
                        Catalogo
                    </Button>
                    {Platform.OS != "ios" && (
                        <Button buttonColor={colors.primary} onPress={() => BackHandler.exitApp()} textVariant="headlineSmall" textColor="white">
                            Sair
                        </Button>
                    )}
                </ImageBackground>
            </View>
        </ImageBackground>
    )
}
