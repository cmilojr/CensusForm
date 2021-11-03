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
                    onChangeQuestion={() => console.log("object")} 
                    valueQuestion={() => console.log("object")}/>
                <TextQuestion 
                    question="Street Address"
                    placeholder="e.g. 600 N Clark St" 
                    onChangeQuestion={() => console.log("object")} 
                    valueQuestion={() => console.log("object")}/>
                <TextQuestion 
                    question="Poscal Code"
                    placeholder="e.g. 50204" 
                    onChangeQuestion={() => console.log("object")} 
                    valueQuestion={() => console.log("object")}/>
                <TextQuestion 
                    question="Phone number"
                    placeholder="e.g. 5628692" 
                    onChangeQuestion={() => console.log("object")} 
                    valueQuestion={() => console.log("object")}/>
                <View style={{
                    height: 150
                }}/>
            </ScrollView>

            <Pagination currentPage={1} navigation={props.navigation}/>
        </View>
    )
}

export default FormFirstPartScreen