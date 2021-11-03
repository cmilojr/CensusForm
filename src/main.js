import React, { useState } from 'react';
import {View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthScreen from './view/Auth/AuthScreen';
import FormStack from './view/Form/FormStack'
import FAQScreen from './view/FAQ/FAQScreen'
import ChatBoxScreen from './view/ChatBox/ChatBoxScreen'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Main = () => {
    const [logginState, setLogginState] = useState(false)
    const [showFAQ, setShowFAQ] = useState(false)
    const [showHD, setShowHD] = useState(false)

    return (
        <NavigationContainer>
            <View style={{
                width: windowWidth,
                height: windowHeight,
            }}>
                { logginState ?
                    <FormStack />
                : 
                    showFAQ ? <FAQScreen setShowFAQ={setShowFAQ} showBack={true}/> :
                    showHD ? <ChatBoxScreen setShowHD={setShowHD} showBack={true}/> :
                        <AuthScreen 
                            setLogginState={setLogginState}
                            setShowFAQ={setShowFAQ}
                            setShowHD={setShowHD}/>
                }
            </View>
        </NavigationContainer>
    );
}

export default Main