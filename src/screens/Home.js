import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';


export default function Home({ navigation }) {
    const handlePress = () => navigation.navigate('ReviewDetails');
    

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title="Review Details" onPress={handlePress} />
        </View>
    );
}