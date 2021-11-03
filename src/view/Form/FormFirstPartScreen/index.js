import React from 'react'
import { View, Text, ScrollView} from 'react-native'
import {CheckQuestion, TextQuestion} from '../../shared/QuestionsType'
import Pagination from '../../shared/Pagination'

const FormFirstPartScreen = (props) => {
    return (
        <View 
            style={{
                flex: 1, 
                flexDirection: 'column', 
                alignItems: 'center',
                backgroundColor: '#bce8b6'
            }}>
            <Text>FormFirstPartScreen</Text>
            <ScrollView style={{
                width: '100%',
            }}>
                <CheckQuestion 
                    question="Cuantos años tienes"
                    answers={["uno", "dos", "tres"]} 
                    setAswer={val => console.log(val)}/>
                <TextQuestion 
                    question="pregunta"
                    placeholder="pregunta" 
                    onChangeQuestion={() => console.log("object")} 
                    valueQuestion={() => console.log("object")}/>
                <CheckQuestion 
                    question="Cuantos años tienes"
                    answers={["uno", "dos", "tres"]} 
                    setAswer={val => console.log(val)}/>
            </ScrollView>

            <Pagination currentPage={1} navigation={props.navigation}/>
        </View>
    )
}

export default FormFirstPartScreen