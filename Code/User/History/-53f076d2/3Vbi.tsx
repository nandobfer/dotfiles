import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from "react"
import { Alert, BackHandler, StyleSheet, Text, View } from "react-native"
import * as SplashScreen from "expo-splash-screen"
import { Camera } from "expo-camera"

SplashScreen.preventAutoHideAsync()

export const App = () => {
    const webViewRef = useRef(null)
    const [hasPermission, setHasPermission] = useState<boolean | null>(null)

    const INJECTEDJAVASCRIPT = `(function() {
        const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);
      })();`

    const onLoaded = async () => {
        // await SplashScreen.hideAsync()
        setTimeout(async () => await SplashScreen.hideAsync(), 1000)
    }

    const onError = () => {
        Alert.alert("Erro", "Falha ao conectar com o servidor, verifique sua conexão com a internet e tente novamente.", [
            { text: "Fechar", onPress: () => BackHandler.exitApp() },
        ])
    }

    useEffect(() => {
        if (hasPermission === false) {
            Alert.alert(
                "Permissão necessária",
                "Seu dispositivo não está permitindo acesso a câmera. Você pode corrigir isso nos ajustes do seu dispositivo"
            )
        }
    }, [hasPermission])

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
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
