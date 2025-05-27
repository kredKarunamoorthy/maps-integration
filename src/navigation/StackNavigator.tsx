import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../features/maps/screens';
import { MapScreen } from '../features/maps/screens/MapScreen';
import APIScreen from '../features/maps/screens/APIScreen';
import Calendar from '../features/maps/screens/CalendarEventFilter';

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
            <Stack.Screen
                name="CalendarScreen"
                component={Calendar}
                options={{
                    title: 'Calendar',
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    );
}