import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

export const App = () => {
    const webViewRef = useRef(null)
    const [hasPermission, setHasPermission] = useState<boolean | null>(null)
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
