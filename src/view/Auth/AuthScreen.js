import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {TextInput} from '../shared/TextInput'
const AuthScreen = (props) => {
    const [logginInfo, setLogginInfo] = useState({userName: '', password: ''});
    const [showPassword, setShowPassword] = useState(false);
    const {setLogginState, setShowFAQ, setShowHD} = props

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
                        placeholder="Electronic Census Number"
                        type="text"
                        onChangeText={event => setLogginInfo({...logginInfo, userName: event})}
                        value={logginInfo.userName}
                        rightIcon={'tag'}
                        //onError={e => setIsErroruserName(e)}
                    />
                    <TextInput
                        placeholder="Census Form Number"
                        type="password"
                        onChangeText={event => setLogginInfo({...logginInfo, password: event})}
                        value={logginInfo.password}
                        rightIcon={'insert-drive-file'}
                        //onError={e => setIsErrorPassword(e)}
                    />
                    <Button
                        title="Login"
                        onPress={() => onSummit()}
                        containerStyle={{height: 40}}
                        fontColor="textBgPrimary"
                    />
                </View>
                <View style={{
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
        backgroundColor: '#bce8b6'
    },
    content: {
        width: '100%',
        justifyContent: 'space-around',
        paddingVertical: 1
    }
})

export default AuthScreen