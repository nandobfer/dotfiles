import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from "react-native"
import { Routes } from "./src/Routes"
import { useEffect, useState } from "react"
import * as SplashScreen from "expo-splash-screen"
import * as MediaLibrary from "expo-media-library"
import { Camera } from "expo-camera"

SplashScreen.preventAutoHideAsync()

const App = () => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null)
    const [galleryPermission, requestGalleryPermission] = MediaLibrary.usePermissions()

    if (galleryPermission === null) {
        requestGalleryPermission()
    }
    // useEffect(() => {
    // }, [galleryPermission])

    useEffect(() => {
        if (hasPermission === false) {
            Alert.alert(
                "Permissão necessária",
                "Seu dispositivo não está permitindo acesso a câmera. Você pode corrigir isso nos ajustes do seu dispositivo"
            )
            ;(async () => {
                const { status } = await Camera.requestCameraPermissionsAsync()
                const { status: audioStatus } = await Camera.requestMicrophonePermissionsAsync()
                setHasPermission(audioStatus === "granted")
            })()
        }

        if (hasPermission) {
            SplashScreen.hideAsync()
        }
    }, [hasPermission])

    useEffect(() => {
        ;(async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === "granted")
        })()
    }, [])

    return (
        <>
            <StatusBar style="auto" hidden />
            <Routes />
        </>
    )
}

export default App