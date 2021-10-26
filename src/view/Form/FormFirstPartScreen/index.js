import React from 'react'
import { View, Text} from 'react-native'
import { Button } from 'react-native-elements'
import Pagination from '../../shared/Pagination'

const FormFirstPartScreen = (props) => {
    return (
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text>FormFirstPartScreen</Text>

            <Pagination currentPage={1} navigation={props.navigation}/>
        </View>
    )
}

export default FormFirstPartScreen