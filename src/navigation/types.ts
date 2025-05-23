import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  APIScreen: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;
