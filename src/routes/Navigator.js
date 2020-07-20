import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';


const Drawer = createDrawerNavigator();


export default function Navigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{ title: 'Home' }} />
                <Drawer.Screen 
                    name="AboutStack"
                    component={AboutStack}
                    options={{ title: 'About' }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}