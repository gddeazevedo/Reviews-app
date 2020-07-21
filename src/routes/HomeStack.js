import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';


const Stack = createStackNavigator();


export default function HomeStak() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation }) => ({
                    headerTitle: () => <Header title="GameZone" navigation={navigation} />,
                    headerStyle: {
                        backgroundColor: '#eee'
                    },
                    headerTitleAlign: 'center'
                })} />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={({ route }) => ({
                    title: `Review of ${route.params.title}`,
                    headerStyle: {
                        backgroundColor: '#eee'
                    }
                })} />
        </Stack.Navigator>
    );
}