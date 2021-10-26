import React, { useState } from 'react';
import {View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthScreen from './view/Auth/AuthScreen';
import FormStack from './view/Form/FormStack'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Main = () => {
const [logginState, setLogginState] = useState(false)
    return (
        <NavigationContainer>
            <View style={{
                width: windowWidth,
                height: windowHeight,
            }}>
                { logginState ?
                    <FormStack />
                : 
                    <AuthScreen setLogginState={setLogginState}/>
                }
            </View>
        </NavigationContainer>
    );
}

export default Main