import React from 'react'
import { View, Text} from 'react-native'
import { Button } from 'react-native-elements'
import Pagination from '../../shared/Pagination'

const FormFourthPartScreen = (props) => {
    return (
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text>FormFourthPartScreen</Text>

            <Pagination currentPage={4} navigation={props.navigation}/>
        </View>
    )
}

export default FormFourthPartScreen