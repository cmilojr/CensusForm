import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './AuthScreen';
import RegisterScreen from './RegisterScreen';
import FAQScreen from '../FAQ/FAQScreen';
import ChatBoxScreen from '../ChatBox/ChatBoxScreen';
const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator keyboardHandlingEnabled>
            <Stack.Screen
                name="AuthScreen"
                component={AuthScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="FAQScreen"
                component={FAQScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ChatBoxScreen"
                component={ChatBoxScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
