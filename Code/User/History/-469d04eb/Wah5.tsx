import React, { useEffect, useState } from "react"
import { NavigationProp } from "@react-navigation/native"
import { Dimensions, View } from "react-native"
import { Text, TextInput } from "react-native-paper"
import { useText } from "../hooks/useText"
import { colors } from "../style/colors"
import * as Clipboard from "expo-clipboard"

interface FloatingTextProps {
    navigation: NavigationProp<any, any>
    playing: boolean
}

export const FloatingText: React.FC<FloatingTextProps> = ({ navigation, playing }) => {
    const { width, height } = Dimensions.get("screen")
    const text = useText()

    useEffect(() => {
        if (playing) {
            const interval = setInterval(() => {
                text.setTextY((y) => y - 1)
            }, 50 / text.speed)

            return () => {
                clearInterval(interval)
            }
        } else {
            text.setTextY(height * 0.75)
        }
    }, [playing])

    useEffect(() => {
        Clipboard.getStringAsync().then((value) => {
            text.setText(value)
        })
    }, [])

    return (
        <View style={{ position: "absolute", top: 0, left: 0, width, height, padding: 20 }}>
            <Text
                style={{
                    padding: 5,
                    color: "white",
                    fontSize: text.fontSize,
                    fontWeight: "bold",
                    textShadowColor: "#000",
                    textShadowOffset: { height: 0, width: 0 },
                    textShadowRadius: 10,
                    top: text.textY,
                }}
            >
                {text.text}
            </Text>
        </View>
    )
}
