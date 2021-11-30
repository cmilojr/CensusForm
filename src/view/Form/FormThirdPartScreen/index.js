import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView} from 'react-native'
import Pagination from '../../shared/Pagination'
import {CheckQuestion, TextQuestion} from '../../shared/QuestionsType'
import {readData} from '../../../../firebase';
import Toast from 'react-native-toast-message';

const FormThirdPartScreen = (props) => {
    const [formThirdPart, setFormThirdPart] = useState({
        kindOfDwelling: "",
        houseAge: "",
        numberOfBedrooms: "",
        publicServices: "",
    })

    const showToast = () => {
        Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Please fill the empty fields.'
        });
    }

    const checkFields = () => {
        return formThirdPart.kindOfDwelling !== "" &&
        formThirdPart.houseAge !== "" &&
        formThirdPart.numberOfBedrooms !== "" &&
        formThirdPart.publicServices !== ""
    }

    useEffect(() => {
        readData()        
            .then((snapshot) => {
                if (snapshot.exists()) {
                    if(snapshot.val().formThirdPart !== undefined){
                        setFormThirdPart(snapshot.val().formThirdPart)
                    }
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
            }}>Dwelling Information</Text>
            <ScrollView style={{
                width: '100%',
            }}>
                <CheckQuestion 
                    setAswer={(kindOfDwelling) => setFormThirdPart({...formThirdPart, kindOfDwelling})}
                    question="Type of dwelling"
                    selectedAnswer={formThirdPart.kindOfDwelling}
                    answers={[
                        "Independent housing",
                        "Apartment",
                        "Room in collective housing",
                        "Worker camps",
                        "Student residence",
                        "Nursing home",
                        "Schools / boarding schools",
                        "Religious order",
                        "Cooperation organization",
                        "Do not know, no answer"
                    ]} 
                    />
                <CheckQuestion 
                    question="How old is the house?"
                    setAswer={(houseAge) => setFormThirdPart({...formThirdPart, houseAge})}
                    selectedAnswer={formThirdPart.houseAge}
                    answers={[
                        "Less than 6 years",
                        "Between 6 and 10 years",
                        "Between 11 and 15 years",
                        "Between 16 and 20 years",
                        "Between 21 and 25 years",
                        "More than 25 years",
                        "Do not know, no answer",
                    ]} 
                    />
                <TextQuestion
                    question="Number of bedrooms"
                    placeholder="e.g. 2" 
                    onChangeQuestion={(numberOfBedrooms) => setFormThirdPart({ ...formThirdPart, numberOfBedrooms })}
                    valueQuestion={formThirdPart.numberOfBedrooms} />
                <CheckQuestion 
                    question="Access to public services?"
                    setAswer={(publicServices) => setFormThirdPart({...formThirdPart, publicServices})}
                    selectedAnswer={formThirdPart.publicServices}
                    answers={[
                        "Yes",
                        "No",
                    ]} 
                    />
                <View style={{
                    height: 150
                }}/>
            </ScrollView>
            <Pagination 
                currentPage={3} 
                navigation={props.navigation} 
                checkFields={checkFields} 
                showToast={showToast}
                objectSave={{
                    formThirdPart:formThirdPart
                }}/>
        </View>
    )
}

export default FormThirdPartScreen