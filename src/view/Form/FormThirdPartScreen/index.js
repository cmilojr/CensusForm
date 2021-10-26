import React from 'react'
import { View, Text} from 'react-native'
import { Button } from 'react-native-elements'
import Pagination from '../../shared/Pagination'

const FormThirdPartScreen = (props) => {
    return (
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text>FormThirdPartScreen</Text>

            <Pagination currentPage={3} navigation={props.navigation}/>
        </View>
    )
}

export default FormThirdPartScreen