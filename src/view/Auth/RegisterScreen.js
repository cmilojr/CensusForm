import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput } from '../shared/TextInput'
import { auth, createUserWithEmailAndPassword } from "../../../firebase";

const RegisterScreen = (props) => {
    const [registerInfo, setRegisterInfo] = useState({ email: '', password: '' });
    const onSummit = () => {
            createUserWithEmailAndPassword(auth, registerInfo.email, registerInfo.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setRegisterInfoInfo({ email: '', password: '' })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
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
                    </View>

                    <TextInput
                        placeholder="Email"
                        type="text"
                        onChangeText={event => setRegisterInfo({ ...registerInfo, email: event })}
                        value={registerInfo.email}
                        rightIcon={'tag'}
                    //onError={e => setIsErroruserName(e)}
                    />
                    <TextInput
                        placeholder="Password"
                        type="password"
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
                </View>
                {/* <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <Button
                        title="FAQ"
                        onPress={() => setShowFAQ(true)}
                        containerStyle={{height: 40, margin: 20}}
                        fontColor="textBgPrimary"
                    />
                    <Button
                        title="Heling Desk"
                        onPress={() => setShowHD(true)}
                        containerStyle={{height: 40, margin: 20}}
                        fontColor="textBgPrimary"
                    />
                </View> */}
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#bce8b6'
    },
    content: {
        width: '100%',
        justifyContent: 'space-around',
        paddingVertical: 1
    }
})

export default RegisterScreen