import React, { useEffect, useRef } from "react"
import { Animated, Dimensions, Easing, PanResponder, View } from "react-native"
import { Text } from "react-native-paper"
import { useText } from "../hooks/useText"
import textStyle from "../style/text"

interface FloatingTextProps {
    navigation: any
    playing: boolean
}

export const FloatingText: React.FC<FloatingTextProps> = ({ navigation, playing }) => {
    const { width, height } = Dimensions.get("screen")
    const text = useText()
    const animatedValue = useRef(new Animated.Value(height * 0.75)).current // Initial value
    const pan = useRef(new Animated.ValueXY()).current

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
        onPanResponderRelease: () => {
            Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start()
        },
    })

    useEffect(() => {
        if (playing) {
            // Calculate duration based on speed
            const duration = 100000 / text.speed // you can adjust this formula

            Animated.loop(
                Animated.timing(animatedValue, {
                    toValue: -height, // Final position at the top
                    duration: duration,
                    easing: Easing.linear,
                    useNativeDriver: true,
                })
            ).start()
        } else {
            animatedValue.setValue(height * 0.75) // Reset position
        }
    }, [playing, text.speed])

    return (
        <View style={{ position: "absolute", top: 0, left: 0, width, height }}>
            <Animated.View
                {...panResponder.panHandlers}
                style={[pan.getLayout(), { transform: [{ translateY: Animated.add(animatedValue, pan.y) }] }]}
            >
                <Text style={[textStyle, { fontSize: text.fontSize, padding: 20 }]}>{text.text}</Text>
            </Animated.View>
        </View>
    )
}
