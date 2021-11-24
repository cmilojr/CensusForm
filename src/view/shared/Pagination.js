import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { updatedb } from '../../../firebase';

const Pagination = (props) => {
    const { 
        currentPage, 
        navigation, 
        checkFields, 
        routeSave, 
        objectSave,
        showToast,
    } = props

    return (
        <View style={styles.container}>
            <Button
                buttonStyle={currentPage === 1 ? styles.selectedStyle : styles.notSelectedStyle}
                title='1'
                onPress={() => {
                    if (checkFields()) {
                        updatedb(objectSave)
                            .then(() => {
                                currentPage !== 1 && navigation.navigate("FormFirstPart")
                            })
                            .catch((error) => {
                                showToast()
                            });
                    } else {
                        showToast()
                    }
                }} />
            <Button
                buttonStyle={currentPage === 2 ? styles.selectedStyle : styles.notSelectedStyle}
                title='2'
                onPress={() => {
                    if (checkFields()) {
                        updatedb(objectSave)
                            .then(() => {
                                currentPage !== 2 && navigation.navigate("FormSecondPart")
                            })
                            .catch((error) => {
                                showToast()
                            });
                    } else {
                        showToast()
                    }   
                }} />
            <Button
                buttonStyle={currentPage === 3 ? styles.selectedStyle : styles.notSelectedStyle}
                title='3'
                onPress={() => {
                    if (checkFields()) {
                        updatedb(objectSave)
                            .then(() => {
                                currentPage !== 3 && navigation.navigate("FormThirdPart")
                            })
                            .catch((error) => {
                                showToast()
                            });
                    } else {
                        showToast()
                    }
                }} />
            <Button
                buttonStyle={currentPage === 4 ? styles.selectedStyle : styles.notSelectedStyle}
                title='4'
                onPress={() => {
                    if (checkFields()) {
                        updatedb(objectSave)
                            .then(() => {
                                currentPage !== 4 && navigation.navigate("FormFourthPart")
                            })
                            .catch((error) => {
                                showToast()
                            });
                    } else {
                        showToast()
                    }
                }} />
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