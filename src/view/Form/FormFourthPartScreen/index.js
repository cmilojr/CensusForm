import React, { useState } from 'react'
import { View, Text} from 'react-native'
import Pagination from '../../shared/Pagination'
import {TextQuestion} from '../../shared/QuestionsType'
const FormFourthPartScreen = (props) => {
    const [feedBack, setFeedBack] = useState("")

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
                onChangeQuestion={(val) => setFeedBack(val)} 
                valueQuestion={feedBack}
                multiline={true}/>
                            
            <Pagination currentPage={4} navigation={props.navigation}/>
        </View>
    )
}

export default FormFourthPartScreen