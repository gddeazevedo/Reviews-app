import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/globalStyles';


export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title:'Joker', rating: 3, body: 'lorem ipsum', key: '1' },
        { title:'The history of my life', rating: 4, body: 'lorem ipsum', key: '2' },
        { title:'Fahrenheit 451', rating: 5, body: 'lorem ipsum', key: '3' }
    ]);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
        </TouchableOpacity>
    );

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={renderItem} />
        </View>
    );
}