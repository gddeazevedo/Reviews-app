import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Card from '../shared/Card';
import { globalStyles } from '../styles/global';


export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Game 1', rating: 3, body: 'lorem ipsum', key: '1' },
        { title: 'Game 2', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Game 3', rating: 5, body: 'lorem ipsum', key: '3' }
    ]);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
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