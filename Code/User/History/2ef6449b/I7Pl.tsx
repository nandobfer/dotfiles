import React from "react"
import { Dimensions, FlatList, Image, ImageBackground, TouchableOpacity, View } from "react-native"
import { Avatar, Text } from "react-native-paper"
import images from "./images"
import { Button } from "../../components/Button"
import { NavigationProp } from "@react-navigation/native"
import { routes } from "../../routes"
import { ImageContainer } from "./ImageContainer"
import { colors } from "../../style/colors"

interface GalleryProps {
    navigation: NavigationProp<any, any>
}

export const Gallery: React.FC<GalleryProps> = ({ navigation }) => {
    const maxHeight = Dimensions.get("window").height
    const imageData: number[] = Object.values(images.gallery)

    return (
        <View
            style={{
                backgroundColor: colors.background.blue,
                height: maxHeight,
                gap: 0,
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <ImageBackground source={images.background.planes} style={{ flex: 1, paddingTop: 20 }}>
                <View
                    style={{
                        padding: 20,
                    }}
                >
                    <Text
                        variant="displayMedium"
                        style={{
                            textAlign: "center",
                            color: "white",
                            textShadowColor: "black",
                            textShadowOffset: { width: 1, height: 1 }, // Deslocamento horizontal e vertical
                            textShadowRadius: 15,
                        }}
                    >
                        Escolha um desenho
                    </Text>
                    <FlatList
                        data={imageData}
                        horizontal
                        // columnWrapperStyle={{ gap: 20 }}
                        contentContainerStyle={{ gap: 120, paddingBottom: 10, alignItems: "center" }}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }: ImageItem) => <ImageContainer navigation={navigation} image={item} />}
                        // numColumns={2}
                    />
                    <Button buttonColor={colors.primary} textColor="white" onPress={() => navigation.navigate(routes.home.name)}>
                        Voltar
                    </Button>
                </View>
            </ImageBackground>
        </View>
    )
}
