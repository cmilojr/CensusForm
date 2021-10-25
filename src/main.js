import React from 'react';
import {View, Text, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Main = () => {
    return (
        <View style={{
            width: windowWidth,
            height: windowHeight,
        }}>
            <Text style={{
                width: '100%',
                textAlign: 'center'
            }}> Main Screen</Text>
        </View>
    );
}

export default Main