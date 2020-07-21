import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Card from '../shared/Card';
import { globalStyles, images } from '../styles/global';


export default function ReviewDetails({ route }) {
    const { title, body, rating } = route.params;
 

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>Title: {title}</Text>
                <Text>Details: {body}</Text>
                <Text>Rating: {rating}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating:</Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    );
}


const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
});