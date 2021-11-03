import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {TextInput} from '../shared/TextInput'
const AuthScreen = (props) => {
    const [logginInfo, setLogginInfo] = useState({userName: '', password: ''});
    const [showPassword, setShowPassword] = useState(false);
    const {setLogginState} = props
    const onSummit = () => {
        console.log("summit")
        setLogginState(true)
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
                <Image
                    style={{
                        width: 250,
                        height: 150,
                      }}
                    source={require('../../../assets/LOGO.png')}
                />
                <TextInput
                    placeholder="Usuario"
                    type="text"
                    onChangeText={event => setLogginInfo({...logginInfo, userName: event})}
                    value={logginInfo.userName}
                    //onError={e => setIsErroruserName(e)}
                    rightIcon="person"
                />
                <TextInput
                    placeholder="Contraseña"
                    type="password"
                    onChangeText={event => setLogginInfo({...logginInfo, password: event})}
                    value={logginInfo.password}
                    secureTextEntry={!showPassword}
                    rightIcon={showPassword ? 'visibility' : 'visibility-off'}
                    onRightIconPress={() => setShowPassword(!showPassword)}
                    //onError={e => setIsErrorPassword(e)}
                />
                <Button
                    title="Login"
                    onPress={() => onSummit()}
                    containerStyle={{height: 40}}
                    fontColor="textBgPrimary"
                />
            </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#bce8b6'
    },
    content: {
        width: '90%',
        justifyContent: 'space-around',
        paddingVertical: 1
    }
})

export default AuthScreen