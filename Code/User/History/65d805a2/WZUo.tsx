import { StatusBar } from "expo-status-bar"
import { useEffect, useRef, useState } from "react"
import { WebView } from "react-native-webview"
import { Camera } from "expo-camera"
import { Alert, BackHandler } from "react-native"
import * as SplashScreen from "expo-splash-screen"
import { withWebViewBridge } from "react-native-webview-bridge-seamless"

SplashScreen.preventAutoHideAsync()

const WebViewWithBridge = withWebViewBridge(WebView)

export default function App() {
    const webViewRef = useRef(null)
    const [hasPermission, setHasPermission] = useState<boolean | null>(null)
    const [reRender, setReRender] = useState(0)

    const onLoaded = async () => {
        await SplashScreen.hideAsync()
    }

    const onError = () => {
        Alert.alert("Erro", "Falha ao conectar com o servidor, verifique sua conexão com a internet e tente novamente.", [
            { text: "Fechar", onPress: () => BackHandler.exitApp() },
        ])
    }

    useEffect(() => {
        ;(async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === "granted")
        })()
    }, [])
    useEffect(() => {
        const backAction = () => {
            // @ts-ignore
            webViewRef.current?.goBack()
            return true
        }

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)

        return () => backHandler.remove()
    }, [])

    return (
        <>
            <StatusBar style="dark" />
            <WebView
                ref={webViewRef}
                source={{ uri: "https://app.mirasuprimentos.com.br" }}
                style={{ flex: 1 }}
                allowFileAccess
                mediaCapturePermissionGrantType="grant"
                mediaPlaybackRequiresUserAction={false}
                textZoom={100}
                onMessage={() => setReRender(reRender + 1)}
                onLoad={onLoaded}
                onError={onError}
            />
        </>
    )
}
