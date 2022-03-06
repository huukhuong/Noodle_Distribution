import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, InfomationScreen, DoneScreen } from '../screens/';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Infomation" component={InfomationScreen} />
                <Stack.Screen name="Done" component={DoneScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;