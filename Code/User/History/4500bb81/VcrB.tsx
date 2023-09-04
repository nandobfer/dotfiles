import React, { useRef, useState } from "react"
import { NavigationProp } from "@react-navigation/native"
import { Dimensions, Text, TouchableOpacity, View } from "react-native"
import { Camera, CameraType, VideoStabilization } from "expo-camera"
import * as MediaLibrary from "expo-media-library"
import * as Sharing from "expo-sharing"
import { colors } from "../../style/colors"
import { FloatingText } from "../../components/FloatingText"
import { IconButton, Modal } from "react-native-paper"
import { SettingsModal } from "../../components/SettingsModal"

interface CameraContainerProps {
    navigation: NavigationProp<any, any>
}

export const CameraContainer: React.FC<CameraContainerProps> = ({ navigation }) => {
    const cameraRef = useRef<Camera>(null)

    const { width, height } = Dimensions.get("screen")

    const [recording, setRecording] = useState(false)
    const [openSettings, setOpenSettings] = useState(false)

    const handlePlay = () => {
        setRecording(true)
        cameraRef.current?.recordAsync().then((video) => {
            Sharing.shareAsync(video.uri)
            // MediaLibrary.saveToLibraryAsync(video.uri)
        })
    }

    const handleStop = () => {
        setRecording(false)
        cameraRef.current?.stopRecording()
    }

    return (
        <Camera
            ref={cameraRef}
            type={CameraType.front}
            style={{ position: "absolute", top: 0, left: 0, width, height, padding: 20, alignItems: "center" }}
            ratio="16:9"
            videoStabilizationMode={VideoStabilization.auto}
        >
            <FloatingText navigation={navigation} playing={recording} />
            <IconButton
                icon={"format-text-variant-outline"}
                iconColor={colors.primary}
                size={50}
                style={{ alignSelf: "flex-end" }}
                onPress={() => setOpenSettings(true)}
            />
            <TouchableOpacity
                style={{
                    zIndex: 5,
                    borderColor: "white",
                    borderWidth: 1,
                    borderRadius: recording ? 5 : 100,
                    width: 50,
                    height: 50,
                    marginTop: height * 0.7,
                    backgroundColor: colors.primary,
                    opacity: recording ? 0.3 : 1,
                }}
                onPress={recording ? handleStop : handlePlay}
            ></TouchableOpacity>
            <SettingsModal open={openSettings} onClose={() => setOpenSettings(false)} />
        </Camera>
    )
}
