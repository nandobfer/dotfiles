import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from "./src/Routes"

const App = () => {
    return (
        <>
            <StatusBar style="auto" hidden />
            <Routes />
        </>
    )
}

export default App