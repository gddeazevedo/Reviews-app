import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Modal,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/Card';
import ReviewForm from './ReviewForm';
import { globalStyles } from '../styles/global';


export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Game 1', rating: 3, body: 'lorem ipsum', key: '1' },
        { title: 'Game 2', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Game 3', rating: 5, body: 'lorem ipsum', key: '3' }
    ]);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const addReview = review => {
        review.key = Math.random().toString();
        setReviews([review, ...reviews]);
        toggle();
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
        </TouchableOpacity>
    );

    return (
        <View style={globalStyles.container}>
            <Modal visible={modal} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name="close"
                            size={24}
                            style={{
                                ...styles.modalToggle,
                                ...styles.modalClose
                            }}
                            onPress={toggle} />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={toggle} />

            <FlatList
                data={reviews}
                renderItem={renderItem} />
        </View>
    );
}


const styles = StyleSheet.create({
    modalContent: {
        flex: 1
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 50,
        marginBottom: 0
    }
});