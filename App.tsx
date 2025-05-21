import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './src/features/maps/screens/HomeScreen';
import { DefaultTheme } from 'react-native-paper';

import { SafeAreaProvider } from 'react-native-safe-area-context';

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
    text: '#000000',
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={lightTheme}>
        <HomeScreen />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
