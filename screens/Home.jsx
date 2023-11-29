// screens/HomeScreen.js

import { useEffect } from 'react';
import { View, Image, StyleSheet, BackHandler, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

const HomeScreen = () => {
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            // Do nothing on back press to prevent going back to the previous screen
            return true;
        });
        return () => backHandler.remove();
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/your-image.jpg')}
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={styles.title}>Mini Vent</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game')}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleQuitPress}>
                <Text style={styles.buttonText}>Quit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333', // Dark grey background
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    button: {
        width: '80%',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff', // white text
        fontSize: 16,
        textAlign: 'center',
    },
});

export default HomeScreen;