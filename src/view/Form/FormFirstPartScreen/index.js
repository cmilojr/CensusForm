import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TextQuestion } from '../../shared/QuestionsType'
import Pagination from '../../shared/Pagination'
import Toast from 'react-native-toast-message';
import { writeUserData, readData, updatedb } from '../../../../firebase';

const FormFirstPartScreen = (props) => {
    const [formFirstPart, setFormFirstPart] = useState({
        neighborhood: "",
        street: "",
        postalCode: "",
        phone: ""
    })

    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Hello',
            text2: 'This is some something 👋'
        });
    }

    useEffect(() => {
        readData("/barrio01")        
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setFormFirstPart(snapshot.val().formFirstPart)
                return(snapshot.val())
                } else {
                console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
    }, [])

    const checkFields = () => {
        return formFirstPart.neighborhood !== "" && formFirstPart.street !== "" && formFirstPart.postalCode !== "" && formFirstPart.phone !== ""
    }

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
            }}>House Information</Text>
            <ScrollView style={{
                width: '100%',
            }}>
                <TextQuestion
                    question="Neighborhood"
                    placeholder="e.g. Los Santos"
                    onChangeQuestion={(neighborhood) => setFormFirstPart({ ...formFirstPart, neighborhood })}
                    valueQuestion={formFirstPart.neighborhood} />
                <TextQuestion
                    question="Street Address"
                    placeholder="e.g. 600 N Clark St"
                    onChangeQuestion={(street) => setFormFirstPart({ ...formFirstPart, street })}
                    valueQuestion={formFirstPart.street} />
                <TextQuestion
                    question="Poscal Code"
                    placeholder="e.g. 50204"
                    onChangeQuestion={(postalCode) => setFormFirstPart({ ...formFirstPart, postalCode })}
                    valueQuestion={formFirstPart.postalCode} />
                <TextQuestion
                    question="Phone number"
                    placeholder="e.g. 5628692"
                    onChangeQuestion={(phone) => setFormFirstPart({ ...formFirstPart, phone })}
                    valueQuestion={formFirstPart.phone} />
                <View style={{
                    height: 150
                }} />
            </ScrollView>

            <Pagination 
                currentPage={1} 
                navigation={props.navigation} 
                checkFields={checkFields} 
                routeSave="/barrio01" // "/barrio01/persona01"
                objectSave={{
                    formFirstPart:formFirstPart
                }}/>
        </View>
    )
}

export default FormFirstPartScreen