import React from 'react';
import {SafeAreaView,SafeAreaProvider} from 'react-native-safe-area-context';
import Main from './src/Main';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Main/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}