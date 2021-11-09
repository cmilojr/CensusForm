import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const Pagination = (props) => {
    const {currentPage, navigatioºn} = props

    return (
        <View style={styles.container}>
            <Button 
                buttonStyle={currentPage === 1 ? styles.selectedStyle : styles.notSelectedStyle}
                title='1'
                onPress={() => currentPage !== 1 && navigation.navigate("FormFirstPart")}/>
            <Button 
                buttonStyle={currentPage === 2 ? styles.selectedStyle : styles.notSelectedStyle}
                title='2'
                onPress={() => currentPage !== 2 && navigation.navigate("FormSecondPart")}/>
            <Button 
                buttonStyle={currentPage === 3 ? styles.selectedStyle : styles.notSelectedStyle}
                title='3'
                onPress={() => currentPage !== 3 && navigation.navigate("FormThirdPart")}/>
            <Button 
                buttonStyle={currentPage === 4 ? styles.selectedStyle : styles.notSelectedStyle}
                title='4'
                onPress={() => currentPage !== 4 && navigation.navigate("FormFourthPart")}/>
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
    selectedStyle: {

    },
    notSelectedStyle: {
        backgroundColor: 'gray',
    }
})

export default Pagination