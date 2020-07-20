import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';


export default function ReviewDetails({ route }) {
    const { title, body, rating } = route.params;

    return (
        <View style={globalStyles.container}>
            <Text>Title: { title }</Text>
            <Text>Details: { body }</Text>
            <Text>Rating: { rating }</Text>
        </View>
    );
}