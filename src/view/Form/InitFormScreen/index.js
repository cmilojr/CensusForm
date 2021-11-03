import React from 'react'
import {View, Text} from 'react-native';
import { Button } from 'react-native-elements'

const InitFormScreen = (props) => {
    const {navigation} = props
    return (
        <View 
            style={{
                flex: 1, 
                flexDirection: 'column', 
                alignItems: 'center',
                backgroundColor: '#bce8b6'
            }}>
            <View style={{
                backgroundColor: 'white',
                margin: 20,
                padding: 20,
                borderRadius: 20,
            }}>
<Text style={{
                fontWeight: 'bold',
                fontSize: 30
            }}>Online Privacy Policy</Text>
            <Text style={{
                fontSize: 20,
                paddingTop: 20
            }}>
                The purpose of this policy is to explain how we handle information we collect during your visit to Census web sites. This policy does not apply to third-party web sites that you are able to access from our web sites, nor does it cover other Census Bureau information collection practices that do not happen on the Internet.

We do not collect personally identifiable information (name, address, e-mail address, social security number, or other personal unique identifiers) or business identifiable information on our web sites unless we specifically advise you that we are doing so.
            </Text>
            </View>
            
            <Button 
                title='Start'
                onPress={() => navigation.navigate('FormFirstPart')}/>
        </View>
    )
}

export default InitFormScreen