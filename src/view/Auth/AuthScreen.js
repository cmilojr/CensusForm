import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {TextInput} from '../shared/TextInput'
const AuthScreen = () => {
    const [logginInfo, setLogginInfo] = useState({userName: '', password: ''});
    const [showPassword, setShowPassword] = useState(false);
    const onSummit = () => {
        console.log("summit")
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={styles.content}>
                <Text style={{textAlign: 'center', fontSize: 43}}>Bolumbia Census Form</Text>
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
                    title="ENTRAR"
                    onPress={() => onSummit()}
                    containerStyle={{height: 40}}
                    fontColor="textBgPrimary"
                />
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    content: {
        width: '90%',
        justifyContent: 'space-around',
        paddingVertical: 1
    }
})

export default AuthScreen