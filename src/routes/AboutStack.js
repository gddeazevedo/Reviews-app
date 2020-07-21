import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../shared/Header';


const Stack = createStackNavigator();


export default function AboutStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="About"
                component={About}
                options={({ navigation }) => ({ 
                    headerTitle: () => <Header title="About" navigation={navigation} />,
                    headerStyle: {
                        backgroundColor: '#eee'
                    },
                    headerTitleAlign: 'center'
                })} />
        </Stack.Navigator>
    );
}