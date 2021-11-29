import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput } from '../shared/TextInput'
import { createUser } from "../../../firebase";
import Toast from 'react-native-toast-message';
import { Platform } from 'react-native';

const RegisterScreen = (props) => {
    const [registerInfo, setRegisterInfo] = useState({ email: '', password: '' });

    const showError = (message) => {
        Toast.show({
            type: 'error',
            text1: 'Error: The codes ECN and CFN were not found.',
            text2: message
        });
    }

    const onSummit = () => {
        createUser(registerInfo.email, registerInfo.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setRegisterInfo({ email: '', password: '' })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                showError(errorMessage)
            })
        props.navigation.goBack()
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={styles.content}>
                <View style={{
                    backgroundColor: 'white',
                    margin: 20,
                    padding: 20,
                    borderRadius: 20,
                }}>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Image
                            style={{
                                width: 250,
                                height: 150,
                            }}
                            source={require('../../../assets/LOGO.png')}
                        />
                        <Image
                            style={{ //280 - 150
                                width: Platform.OS === 'ios' || Platform.OS === 'android' ? 280 : 1000,
                                height: Platform.OS === 'ios' || Platform.OS === 'android' ? 150 : 500,
                            }}
                            source={require('../../../assets/avisos-01.png')}
                        />
                    </View>

                    <TextInput
                        placeholder="Email"
                        type="text"
                        autoCapitalize={false}
                        onChangeText={event => setRegisterInfo({ ...registerInfo, email: event })}
                        value={registerInfo.email}
                        rightIcon={'tag'}
                    //onError={e => setIsErroruserName(e)}
                    />
                    <TextInput
                        placeholder="Password"
                        type="password"
                        autoCapitalize={false}
                        onChangeText={event => setRegisterInfo({ ...registerInfo, password: event })}
                        value={registerInfo.password}
                        rightIcon={'insert-drive-file'}
                    //onError={e => setIsErrorPassword(e)}
                    />
                    <Button
                        title="Register"
                        onPress={() => onSummit()}
                        containerStyle={{ height: 40 }}
                        fontColor="textBgPrimary"
                    />
                    <Button
                        title="Back"
                        onPress={() => props.navigation.goBack()}
                        containerStyle={{ height: 40, marginTop: 20 }}
                        fontColor="textBgPrimary"
                    />
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ababab'
    },
    content: {
        width: '100%',
        justifyContent: 'space-around',
        paddingVertical: 1
    }
})

export default RegisterScreen