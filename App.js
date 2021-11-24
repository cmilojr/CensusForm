import React from 'react';
import {SafeAreaView,SafeAreaProvider} from 'react-native-safe-area-context';
import Main from './src/main';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Main/>
        <Toast/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}