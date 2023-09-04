import React from "react"
import { FlatList, Image, View } from "react-native"
import { Avatar, Text } from "react-native-paper"
import images from "./images"

interface GalleryProps {}

export const Gallery: React.FC<GalleryProps> = ({}) => {
    const imageData: number[] = Object.values(images)

    return (
        <View style={{ padding: 20 }}>
            <Text>Escolha um desenho</Text>
            <FlatList
                data={imageData}
                columnWrapperStyle={{ gap: 10 }}
                contentContainerStyle={{ gap: 10 }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }: ImageItem) => (
                    <View style={{}}>
                        <Image source={item} style={{ width: 150, height: 150 }} />
                    </View>
                )}
                numColumns={2}
            />
        </View>
    )
}
