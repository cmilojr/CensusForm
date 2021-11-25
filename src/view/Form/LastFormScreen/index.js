import React from 'react'
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements'
import { signout } from '../../../../firebase';
import Toast from 'react-native-toast-message';

const LastFormScreen = (props) => {

    const showErrorForm = () => {
        Toast.show({
            type: 'error',
            text1: 'Error: The codes ECN and CFN were not found.',
            text2: 'Please check the information entered.'
        });
    }

    return (

        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#bce8b6',
                height: '100%'
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
                }}>Form completed</Text>

                <View style={{
                    marginTop: 20
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                    }}>You have successfully completed the census form, thank you for your cooperation.</Text>
                    <Image
                        style={{
                            width: 250,
                            height: 150,
                        }}
                        source={require('../../../../assets/finished.png')}
                    />
                </View>
            </View>
            <View>
                <Button
                    containerStyle={{ marginTop: 20 }}
                    title='Log Out'
                    onPress={() => {
                        signout()
                            .then(() => {
                                console.log("Sign-out successful.")
                            }).catch((error) => {
                                // An error happened.
                                console.log(error)
                            });
                    }} />
            </View>
            <View style={{ height: 100 }} />
        </View>
    )
}

export default LastFormScreen