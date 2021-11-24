import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import { TextInput } from '../../shared/TextInput';
import { codes, readData, signout } from '../../../../firebase';
import Toast from 'react-native-toast-message';

const LastFormScreen = (props) => {
    const { navigation } = props
    const [censusCredentials, setCensusCredentials] = useState({ ECN: "", CFN: "" })

    const showErrorForm = () => {
        Toast.show({
            type: 'error',
            text1: 'Error: The codes ECN and CFN were not found.',
            text2: 'Please check the information entered.'
        });
    }

    const checkFormCodes = () => {
        readData(censusCredentials.ECN + "/" + censusCredentials.CFN)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    codes(censusCredentials.ECN, censusCredentials.CFN)
                    navigation.navigate('FormFirstPart')
                } else {
                    console.log("No data available");
                    showErrorForm()
                }
            }).catch((error) => {
                console.error(error);
                showErrorForm()
            });
    }

    return (
        <ScrollView>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#bce8b6'
                }}>
                <View style={{
                    backgroundColor: 'white',
                    margin: 20,
                    padding: 20,
                    borderRadius: 20,
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 30
                    }}>Online Privacy Policy</Text>
                    
                    <View style={{
                        marginTop: 20
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                        }}>To initialize the Census App, please enter the CFN and ECN</Text>
                        <TextInput
                            placeholder="ECN"
                            type="text"
                            autoCapitalize={false}
                            onChangeText={event => setCensusCredentials({ ...censusCredentials, ECN: event })}
                            value={censusCredentials.ECN}
                            rightIcon={'tag'}
                        //onError={e => setIsErroruserName(e)}
                        />
                        <TextInput
                            placeholder="CFN"
                            type="CFN"
                            autoCapitalize={false}
                            onChangeText={event => setCensusCredentials({ ...censusCredentials, CFN: event })}
                            value={censusCredentials.CFN}
                            rightIcon={'insert-drive-file'}
                        //onError={e => setIsErrorPassword(e)}
                        />
                    </View>
                </View>
                <View>
                    <Button
                        title='Start'
                        onPress={() => { checkFormCodes() }} />
                    <Button
                        containerStyle={{ marginTop: 20 }}
                        title='Log Out'
                        onPress={() => {
                            signout()
                                .then(() => {
                                    console.log("Sign-out successful.")
                                }).catch((error) => {
                                    // An error happened.
                                    console.log(error)
                                });
                        }} />
                </View>
                <View style={{ height: 100 }} />
            </View>
        </ScrollView>
    )
}

export default LastFormScreen