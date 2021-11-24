import React from 'react'
import { View, Text, ScrollView} from 'react-native'
import BackButton from '../shared/BackButton'

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
            }}>Talk with Erika</Text>
            <ScrollView style={{
                width: '100%',
            }}>

                <View style={{
                    height: 150
                }}/>
            </ScrollView>
            {
                showBack && <BackButton setBackAction={setShowHD} />
            }
            
        </View>
    )
}

export default ChatBoxScreen