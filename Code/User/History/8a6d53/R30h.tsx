import React from "react"
import { View } from "react-native"

interface ImageProps {
    image: number
}

export const ImageContainer: React.FC<ImageProps> = ({ image }) => {
    return (
        <TouchableOpacity style={{}} onPress={() => navigation.navigate(routes.home.name)}>
            <Image source={item} style={{ width: 300, height: 500, resizeMode: "cover" }} />
        </TouchableOpacity>
    )
}
