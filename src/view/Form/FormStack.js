import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

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
        {/* <Stack.Screen
          name="OrdenDetail"
          options={{
            headerShown: false,
          }}
          component={OrderDetailScreen}
        />
        <Stack.Screen
          name="RemplaceItem"
          options={{
            headerShown: false,
          }}
          component={RemplaceOrderScreen}
        />
        <Stack.Screen
          name="CameraScanner"
          options={{
            headerShown: true,
            title: 'Escaner código',
            gestureEnabled: false,
          }}
          component={CameraScannerScreen}
        />
        <Stack.Screen
          name="ProductScanner"
          options={{
            headerShown: false,
            title: 'Escaner código',
            gestureEnabled: false,
          }}
          component={ProductsScannerScreen}
        /> */}
      </Stack.Navigator>
    );
  };
  
  export default FormStack;
  