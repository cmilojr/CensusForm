import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import AuthScreen from './view/Auth/AuthScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Main = () => {
    var logged = false
    return (
        <View style={{
            width: windowWidth,
            height: windowHeight,
        }}>
            { logged ?
                <></>  
            : 
                <AuthScreen />
            }
        </View>
    );
}

export default Main