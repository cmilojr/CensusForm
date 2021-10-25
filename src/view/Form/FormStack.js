import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InitFormScreen from './InitFormScreen';

const Stack = createStackNavigator();

const FormStack = () => {
    return (
      <Stack.Navigator keyboardHandlingEnabled>
        <Stack.Screen
          name="InitForm"
          component={InitFormScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  };
  
  export default FormStack;
  