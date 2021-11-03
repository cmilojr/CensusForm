import React from 'react'
import { View, Text, ScrollView} from 'react-native'
import Pagination from '../../shared/Pagination'
import {CheckQuestion, TextQuestion} from '../../shared/QuestionsType'

const FormThirdPartScreen = (props) => {
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
            }}>Dwelling Information</Text>
            <ScrollView style={{
                width: '100%',
            }}>
                <CheckQuestion 
                    setAswer={val => console.log(val)}
                    question="Type of dwelling"
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
                    setAswer={val => console.log(val)}
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
                    onChangeQuestion={() => console.log("object")} 
                    valueQuestion={() => console.log("object")}/>
                <CheckQuestion 
                    question="Access to public services?"
                    setAswer={val => console.log(val)}
                    answers={[
                        "Yes",
                        "No",
                    ]} 
                    />
                <View style={{
                    height: 150
                }}/>
            </ScrollView>
            <Pagination currentPage={3} navigation={props.navigation}/>
        </View>
    )
}

export default FormThirdPartScreen