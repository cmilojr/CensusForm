import React from 'react'
import { View, Text} from 'react-native'
import { Button } from 'react-native-elements'
import Pagination from '../../shared/Pagination'

const FormSecondPartScreen = (props) => {
    return (
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text>FormSecondPartScreen</Text>

            <Pagination currentPage={2} navigation={props.navigation}/>
        </View>
    )
}

export default FormSecondPartScreen