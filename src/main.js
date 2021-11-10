import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FormStack from './view/Form/FormStack'
import AuthStack from './view/Auth/AuthStack';
import { onAuthStateChanged, auth } from '../firebase';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Main = () => {
    const [logginState, setLogginState] = useState(false)
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            setLogginState(true)
        } else {
            // User is signed out
            setLogginState(false)
        }
    });

    return (
        <NavigationContainer>
            <View style={{
                width: windowWidth,
                height: windowHeight,
            }}>
                {logginState ?
                    <FormStack />
                    :
                    <AuthStack />
                }
            </View>
        </NavigationContainer>
    );
}

export default Main