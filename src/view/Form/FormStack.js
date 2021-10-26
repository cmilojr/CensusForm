import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InitFormScreen from './InitFormScreen';
import FormFirstPartScreen from './FormFirstPartScreen/index';
import FormSecondPartScreen from './FormSecondPartScreen/index'
import FormThirdPartScreen from './FormThirdPartScreen/index'
import FormFourthPartScreen from './FormFourthPartScreen/index'
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
        <Stack.Screen
          name="FormFirstPart"
          component={FormFirstPartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FormSecondPart"
          component={FormSecondPartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FormThirdPart"
          component={FormThirdPartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FormFourthPart"
          component={FormFourthPartScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  };
  
  export default FormStack;
  