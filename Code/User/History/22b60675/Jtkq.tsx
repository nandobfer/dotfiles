import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from "./src/Routes"
import { useState } from "react"
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

const App = () => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null)

    return (
        <>
            <StatusBar style="auto" hidden />
            <Routes />
        </>
    )
}

export default App