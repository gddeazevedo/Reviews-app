import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';


const Stack = createStackNavigator();


export default function HomeStak() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Movies',
                    headerStyle: {
                        backgroundColor: '#eee',
                        height: 60
                    }
                }} />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={({ route }) => ({
                    title: `Review of ${route.params.title}`,
                    headerStyle: {
                        backgroundColor: '#eee',
                        height: 60
                    }
                })} />
        </Stack.Navigator>
    );
}