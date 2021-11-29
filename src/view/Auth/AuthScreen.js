import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput } from '../shared/TextInput'
import { signInWithEmailAndPassword, auth } from '../../../firebase';
import Toast from 'react-native-toast-message';

const AuthScreen = (props) => {
    const [logginInfo, setLogginInfo] = useState({ email: '', password: '' });

    const showError = (message) => {
        Toast.show({
            type: 'error',
            text1: 'Error: The codes ECN and CFN were not found.',
            text2: message
        });
    }

    const onSummit = () => {
        signInWithEmailAndPassword(auth, logginInfo.email, logginInfo.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                showError(errorMessage)
            });
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
                        autoCapitalize={false}
                        onChangeText={event => setLogginInfo({ ...logginInfo, userName: event })}
                        value={logginInfo.userName}
                        rightIcon={'tag'}
                    //onError={e => setIsErroruserName(e)}
                    />
                    <TextInput
                        placeholder="Password"
                        type="password"
                        autoCapitalize={false}
                        secureTextEntry={true}
                        onChangeText={event => setLogginInfo({ ...logginInfo, password: event })}
                        value={logginInfo.password}
                        rightIcon={'insert-drive-file'}
                    //onError={e => setIsErrorPassword(e)}
                    />
                    <Button
                        title="Login"
                        onPress={() => onSummit()}
                        containerStyle={{ height: 40 }}
                        fontColor="textBgPrimary"
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <Button
                        title="Sign Up"
                        onPress={() => props.navigation.navigate("RegisterScreen")}
                        containerStyle={{ height: 40, margin: 20 }}
                        fontColor="textBgPrimary"
                    />
                     <Button
                        title="FAQ"
                        //onPress={() => setShowFAQ(true)}
                        //onPress={() => props.navigation.navigate("../FAQ/FAQScreen")}
                        onPress={() => props.navigation.navigate("FAQScreen")}
                        containerStyle={{height: 40, margin: 20}}
                        fontColor="textBgPrimary"
                    />
                    <Button
                        title="Helping Desk"
                        //onPress={() => setShowHD(true)}
                        //onPress={() => props.navigation.navigate("../ChatBox/ChatBoxScreen")} 
                        onPress={() => props.navigation.navigate("ChatBoxScreen")}                       
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
        backgroundColor: '#ababab'
    },
    content: {
        width: '100%',
        justifyContent: 'space-around',
        paddingVertical: 1
    }
})

export default AuthScreen