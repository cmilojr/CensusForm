import React, {useState, useEffect} from 'react'
import { Text, View, FlatList, Pressable } from 'react-native'
import { TextInput } from '../shared/TextInput'
import { Icon } from 'react-native-elements'

const CheckAnswer = (props) => {
    const {onPress, answerText, setAswer, isSelected} = props
    return (
        <Pressable style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            marginBottom: 5,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 6,
            padding: 10
        }}
        onPress={() => setAswer(answerText)}>
            <Icon
                name={!isSelected ? "radio-button-unchecked" : "radio-button-checked"}
                onPress={onPress}
                />
            <Text style={{
                marginLeft: 10,
                fontSize: 19
            }}>{answerText}</Text>
        </Pressable>
    )
}

export const CheckQuestion = (props) => {
    const {question, answers, setAswer, showOther, selectedAnswer} = props
    const [selected, setSelected] = useState("")
    const [otherAnswer, setOtherAnswer] = useState("")
    
    useEffect(() => {
        setAswer(selected)
    }, [selected])

    useEffect(() => {
        setSelected("")
        setAswer(otherAnswer)
    }, [otherAnswer])

    useEffect(() => {
        setSelected(selectedAnswer)
    }, [])

    return (
        <View style={{
            marginHorizontal: 20,
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: "white",
            borderColor: '#a3a2a0',
            paddingBottom: 10,
            marginBottom: 10,
        }}>
            <Text style={{
                marginHorizontal: 20,
                marginTop: 10,
                fontSize: 15,
                fontWeight: 'bold',
                marginVertical: 5,
            }}>
                {question}
            </Text>
            {answers.map((props,key) => {
                return (
                    <CheckAnswer 
                        answerText={props}
                        setAswer={setSelected}
                        isSelected={answers[key] === selected || answers[key] === selectedAnswer}
                        />
                )
            })}
            {
                showOther && 
                    <TextInput 
                    onChangeText={(val) => setOtherAnswer(val)}
                    placeholder={"Other answer"}
                    value={selected === "" ? otherAnswer : ""}
                    type="text" 
                    />
            }
        </View>
    )
}

export const TextQuestion = (props) => {
    const {
        question, 
        placeholder, 
        onChangeQuestion, 
        valueQuestion, 
        multiline
    } = props
    return (
        <View style={{
            marginHorizontal: 20,
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: "white",
            borderColor: '#a3a2a0',
            marginBottom: 10,
        }}>
            <Text style={{
                marginHorizontal: 20,
                marginTop: 10,
                fontSize: 15,
                fontWeight: 'bold'
            }}>
                {question}
            </Text>
            <TextInput 
                onChangeText={onChangeQuestion}
                placeholder={placeholder}
                value={valueQuestion}
                type="text" 
                multiline={multiline}
                />
        </View>
    )
}
