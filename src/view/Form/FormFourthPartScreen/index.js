import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Pagination from '../../shared/Pagination'
import { TextQuestion } from '../../shared/QuestionsType'
import {readData} from '../../../../firebase';

const FormFourthPartScreen = (props) => {
    const [formFourthPart, setFormFourthPart] = useState({
        feedBack: ""
    })
    const checkFields = () => {
        return formFourthPart.feedBack !== ""
    }

    useEffect(() => {
        readData("/barrio01")        
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
                backgroundColor: '#bce8b6'
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

            <Pagination
                currentPage={4}
                navigation={props.navigation}
                checkFields={checkFields}
                routeSave="/barrio01" // TODO - "/barrio01/persona01"
                objectSave={{
                    formFourthPart: formFourthPart
                }} />
        </View>
    )
}

export default FormFourthPartScreen