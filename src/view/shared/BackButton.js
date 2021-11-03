import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const BackButton = (props) => {
    const {setBackAction} = props

    return (
        <View style={styles.container}>
            <Button 
                title='Back'
                onPress={() => setBackAction(false)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around', 
        flexDirection: 'row', 
        position: 'absolute',
        bottom: 100,
        width: '50%',
    },
})

export default BackButton