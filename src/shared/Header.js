import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    Dimensions, 
    Image, 
    ImageBackground 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { images } from '../styles/global';


export default function Header({ navigation, title }) {
    const handlePress = () => navigation.openDrawer();

    return (
        <ImageBackground style={styles.header} source={images.background}>
            <MaterialIcons 
                name="menu" 
                size={28} 
                style={styles.icon} 
                onPress={handlePress} />
            <View style={styles.headerTitle}>
                <Image source={images.logo} style={styles.headerImg} />
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerImg: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    headerTitle: {
        flexDirection: 'row'
    }
});