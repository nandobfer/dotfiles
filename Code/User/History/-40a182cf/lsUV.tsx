import React from "react"

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
