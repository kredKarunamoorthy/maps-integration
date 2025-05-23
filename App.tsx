import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
    text: '#000000',
  },
};

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <SafeAreaProvider>
        <PaperProvider theme={lightTheme}>
          <StackNavigator />
        </PaperProvider>
      </SafeAreaProvider>
    </NavigationContainer>
    </QueryClientProvider>
  );
}
