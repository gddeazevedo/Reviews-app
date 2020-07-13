import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';


export default function ReviewDetails({ navigation }) {
    const handlePress = () => navigation.goBack();
    
    return (
        <View style={globalStyles.container}>
            <Text>Review Details Screen</Text>
            <Button title="Home" onPress={handlePress} />
        </View>
    );
}