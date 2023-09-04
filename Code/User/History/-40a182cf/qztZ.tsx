import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack"

interface RoutesProps {
    children: React.ReactNode
}

export const Routes: React.FC<RoutesProps> = ({ children }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={navigator_options}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
