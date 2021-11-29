import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Pagination from '../../shared/Pagination'
import { TextQuestion } from '../../shared/QuestionsType'
import {readData} from '../../../../firebase';
import Toast from 'react-native-toast-message';
import { Button } from 'react-native-elements'

const FormFourthPartScreen = (props) => {
    const [formFourthPart, setFormFourthPart] = useState({
        feedBack: ""
    })
    const checkFields = () => {
        return formFourthPart.feedBack !== ""
    }

    const showToast = () => {
        Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Please fill the empty fields.'
        });
    }
    
    useEffect(() => {
        readData()        
            .then((snapshot) => {
                if (snapshot.exists()) {
                    if(snapshot.val().formFourthPart) {
                        setFormFourthPart(snapshot.val().formFourthPart)
                    }
                return(snapshot.val())
                } else {
                console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#ababab'
            }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 32,
                margin: 20
            }}>Feedback</Text>

            <TextQuestion
                question="Please entrer feedback about the census experience"
                placeholder="e.g. Amazing experience"
                onChangeQuestion={(feedBack) => setFormFourthPart({feedBack})}
                valueQuestion={formFourthPart.feedBack}
                multiline={true} />
            <Button
                title='Finish'
                onPress={() => { props.navigation.navigate("LastForm") }} />
            <Pagination
                currentPage={4}
                navigation={props.navigation}
                checkFields={checkFields}
                showToast={showToast}
                objectSave={{
                    formFourthPart: formFourthPart
                }} />
        </View>
    )
}

export default FormFourthPartScreen