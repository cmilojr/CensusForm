import React, {useState} from 'react'
import { View, Text, ScrollView} from 'react-native'
import {CheckQuestion, TextQuestion} from '../../shared/QuestionsType'
import Pagination from '../../shared/Pagination'

const FormSecondPartScreen = (props) => {
    const [numberOfMembers, setNumberOfMembers] = useState(0)
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
            }}>Home Members</Text>
            <ScrollView style={{
                width: '100%',
            }}>
                <TextQuestion 
                    question="Number of household members"
                    placeholder="e.g. 3" 
                    onChangeQuestion={num => setNumberOfMembers(num)} 
                    valueQuestion={() => console.log("object")}/>
                <TextQuestion 
                    question="Full name"
                    placeholder="e.g. Yolanda Squatpump" 
                    onChangeQuestion={num => setNumberOfMembers(num)} 
                    valueQuestion={() => console.log("object")}/>
                <TextQuestion 
                    question="Age"
                    placeholder="e.g. 24" 
                    onChangeQuestion={num => setNumberOfMembers(num)} 
                    valueQuestion={() => console.log("object")}/>
                <TextQuestion 
                    question="ID number"
                    placeholder="e.g. 241020303" 
                    onChangeQuestion={num => setNumberOfMembers(num)} 
                    valueQuestion={() => console.log("object")}/>
                <CheckQuestion 
                    setAswer={val => console.log(val)}
                    question="Marital Status"
                    answers={[
                        "Single",
                        "Married",
                        "Concubinage / Consensual Union Widowed",
                        "Separated",
                        "Divorced",
                        "Do not know, no answer",
                    ]} 
                    />
                {
                    /*
                    Array(numberOfMembers).map(() => {
                        return (
                            
                        )
                    })
                    */
                }
                <View style={{
                    height: 150
                }}/>
            </ScrollView>
            <Pagination currentPage={2} navigation={props.navigation}/>
        </View>
    )
}

export default FormSecondPartScreen