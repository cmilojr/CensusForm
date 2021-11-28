import React from 'react'
import { View, Text, ScrollView} from 'react-native'
import BackButton from '../shared/BackButton'
import {TextQuestion} from '../shared/QuestionsType'
import { Button } from 'react-native-elements'

const ChatBoxScreen = (props) => {
    const {setShowHD, showBack} = props
    return (
        <View 
            style={{
                flex: 1, 
                flexDirection: 'column', 
                alignItems: 'center',
                backgroundColor: '#bce8b6'
            }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 32,
                margin: 20
            }}> Talk with Erika </Text>
            
            <ScrollView style={{
                width: '100%',
            }}>
                <View style={{
                    height: 150
                }}/>

                    <Button
                        title="Back"
                        onPress={() => props.navigation.goBack()}
                        containerStyle={{ height: 40, marginTop: 20 }}
                        fontColor="textBgPrimary"
                    />

            </ScrollView>
            {
                showBack && <BackButton setBackAction={setShowHD} />
            }
            
        </View>
    )
}

export default ChatBoxScreen