import React from 'react'
import { View, Text, ScrollView} from 'react-native'
import {TextQuestion} from '../shared/QuestionsType'
import BackButton from '../shared/BackButton'
import { Button } from 'react-native-elements'


const FAQScreen = (props) => {
    const {setShowFAQ, showBack} = props
    return (
        <View 
            style={{
                flex: 1, 
                flexDirection: 'column', 
                alignItems: 'center',
                backgroundColor: '#d5d5d5'
            }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 32,
                margin: 5
            }}>Frequently Asked Questions </Text>
            <ScrollView style={{
                width: '95%',
            }}>
                <TextQuestion 
                    question="Why my participation is important?"
                    valueQuestion="Your answers help produce accurate, reliable statistics on employment, infrastructure, education, economic opportunities, and other important characteristics of your community. This information helps policymakers, local officials, companies, and organizations to understand and assess the resources and needs of people, places, and businesses across the country. None of this would be possible without your participation."
                    editable={false}
                    multiline={true}/>
                <TextQuestion 
                    question="How can I complete this survey?"
                    valueQuestion="In addition to conducting the 2020 Census, the Census Bureau oversees many surveys that are generally completed in-person, by mail, online, or by telephone. For more information about completing a particular survey, you can search the Census list of surveys and read more about what your options are for responding."
                    editable={false}
                    multiline={true}/>
                <TextQuestion 
                    question="How my answers will be used?"
                    valueQuestion="All information that you provide in a Census Bureau survey or census is used exclusively to create accurate, relevant statistics about the nation’s people, places, and economy. These statistics help inform elected officials about communities and businesses across Bolumbia."
                    editable={false}
                    multiline={true}/>
                <TextQuestion 
                    question="Whom do I contact if I have additional questions, recommendations, or issues?"
                    valueQuestion="If you have questions regarding the Census, data products, or general information call the Census Customer Service Center at 1-800-923-8282.

                    If you need assistance in verifying a Census Bureau survey mailing, call, or in-person interview, contact the Census Bureau Regional Office associated with your state.
                    
                    If you have questions regarding data policies or a FOIA request, contact the Policy Office.
                    
                    If you have additional issues or concerns that are not addressed above, please contact the Office of the Respondent Advocate."
                    editable={false}
                    multiline={true}/>
                <Button
                    title="Back"
                    onPress={() => props.navigation.goBack()}
                    containerStyle={{ height: 45, marginTop: 20 }}
                    fontColor="textBgPrimary"
                    />
                <View style={{
                    height: 250
                    
                }}/>
                </ScrollView>
                {
                    showBack && <BackButton setBackAction={setShowFAQ} />      
                }  
        </View>
    )
}

export default FAQScreen