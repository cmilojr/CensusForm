import React from 'react'
import {View, Text} from 'react-native';
import { Button } from 'react-native-elements'

const InitFormScreen = (props) => {
    const {navigation} = props
    return (
        <View>
            <Text>InitFormScreen</Text>
            <Button 
                title='start'
                onPress={() => navigation.navigate('FormFirstPart')}/>
        </View>
    )
}

export default InitFormScreen