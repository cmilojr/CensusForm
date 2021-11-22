import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import { TextInput } from '../../shared/TextInput';
import { writeUserData, readData, updatedb } from '../../../../firebase';
const InitFormScreen = (props) => {
    const { navigation } = props
    const [censusCredentials, setCensusCredentials] = useState({ ECN: "", CFN: "" })

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
                    <Text style={{
                        fontSize: 20,
                        paddingTop: 20
                    }}>
                        The purpose of this policy is to explain how we handle information we collect during your visit to Census web sites. This policy does not apply to third-party web sites that you are able to access from our web sites, nor does it cover other Census Bureau information collection practices that do not happen on the Internet.

                        We do not collect personally identifiable information (name, address, e-mail address, social security number, or other personal unique identifiers) or business identifiable information on our web sites unless we specifically advise you that we are doing so.
                    </Text>
{/* 
                    <View style={{
                        marginTop: 20
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                        }}>To initialize the Census App, please enter the CFN and ECN</Text>
                        <TextInput
                            placeholder="ECN"
                            type="text"
                            onChangeText={event => setCensusCredentials({ ...censusCredentials, ECN: event })}
                            value={censusCredentials.ECN}
                            rightIcon={'tag'}
                        //onError={e => setIsErroruserName(e)}
                        />
                        <TextInput
                            placeholder="CFN"
                            type="CFN"
                            onChangeText={event => setCensusCredentials({ ...censusCredentials, CFN: event })}
                            value={censusCredentials.CFN}
                            rightIcon={'insert-drive-file'}
                        //onError={e => setIsErrorPassword(e)}
                        />
                    </View> */}
                </View>
                <Button
                    title='Start'
                    onPress={() => navigation.navigate('FormFirstPart')} />
                <View style={{ height: 100 }} />
            </View>
        </ScrollView>
    )
}

export default InitFormScreen