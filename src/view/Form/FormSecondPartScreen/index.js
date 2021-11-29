import React, {useState, useEffect, useLayoutEffect} from 'react'
import { View, Text, ScrollView} from 'react-native'
import {CheckQuestion, TextQuestion} from '../../shared/QuestionsType'
import Pagination from '../../shared/Pagination'
import {readData} from '../../../../firebase';
import Toast from 'react-native-toast-message';

const FormSecondPartScreen = (props) => {
    const [formSecondPart, setFormSecondPart] = useState({
        householdMembers: "",
        maritalStatus: "",
        fullName: "",
        age: "",
        id: "",
    })

    const showToast = () => {
        Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Please fill the empty fields.'
        });
    }

    const checkFields = () => {
        return formSecondPart.householdMembers !== "" && 
        formSecondPart.maritalStatus !== "" && 
        formSecondPart.fullName !== "" && 
        formSecondPart.id !== "" && 
        formSecondPart.age !== ""
    }

    useLayoutEffect(() => {
        readData()        
            .then((snapshot) => {
                if (snapshot.exists()) {
                    if(snapshot.val().formSecondPart !== undefined) {
                        setFormSecondPart(snapshot.val().formSecondPart)
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
            }}>Home Members</Text>
            <ScrollView style={{
                width: '100%',
            }}>
                <TextQuestion 
                    question="Number of household members"
                    placeholder="e.g. 3" 
                    onChangeQuestion={householdMembers => setFormSecondPart({...formSecondPart, householdMembers})} 
                    valueQuestion={formSecondPart.householdMembers}/>
                <TextQuestion 
                    question="Full name"
                    placeholder="e.g. Yolanda Squatpump" 
                    onChangeQuestion={fullName => setFormSecondPart({...formSecondPart, fullName})} 
                    valueQuestion={formSecondPart.fullName}/>
                <TextQuestion 
                    question="Age"
                    placeholder="e.g. 24" 
                    onChangeQuestion={age => setFormSecondPart({...formSecondPart, age})} 
                    valueQuestion={formSecondPart.age}/>
                <TextQuestion 
                    question="ID number"
                    placeholder="e.g. 241020303" 
                    onChangeQuestion={id => setFormSecondPart({...formSecondPart, id})} 
                    valueQuestion={formSecondPart.id}/>
                <CheckQuestion 
                    setAswer={maritalStatus => setFormSecondPart({...formSecondPart, maritalStatus})} 
                    question="Marital Status"
                    selectedAnswer={formSecondPart.maritalStatus}
                    answers={[
                        "Single",
                        "Married",
                        "Concubinage / Consensual Union Widowed",
                        "Separated",
                        "Divorced",
                        "Do not know, no answer",
                    ]} 
                    />
                <View style={{
                    height: 150
                }}/>
            </ScrollView>

            <Pagination 
                currentPage={2} 
                navigation={props.navigation} 
                checkFields={checkFields}
                showToast={showToast}
                objectSave={{
                    formSecondPart:formSecondPart
                }}/>
        </View>
    )
}

export default FormSecondPartScreen