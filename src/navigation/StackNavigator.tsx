import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../features/maps/screens/HomeScreen';
import { MapScreen } from '../features/maps/components/MapScreen';
import APIScreen from '../features/maps/components/APIScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                    title: 'Map',
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="APIScreen"
                component={APIScreen}
                options={{
                    title: 'API',
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    );
}