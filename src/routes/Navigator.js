import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';


const Stack = createStackNavigator();


export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Movies' }} />
                <Stack.Screen
                    name="ReviewDetails"
                    component={ReviewDetails}
                    options={{ title: 'Movie Review' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}