import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import tw from "./export"
import { useDeviceContext } from 'twrnc';
import Card from '../components/MyCard';
const image = { uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDQ8NDQ8QDw8NDQ0NDQ8PDw8PDw0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNyg5Oi0BCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALUBFgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAGBABAQEBAQAAAAAAAAAAAAAAABEBgRL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AzIABUAFQBQQFQUEFQAAAAAAFQAAAAAAAAAAAAAAAAAAAAAAAAAFQBRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBQoBQAAAAAAAAAAABFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEUARQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQUAAAAAABFAEFSgCgIpQAQBRAFEAUAARQAABFAAAAAAARQE4CggAKIAKgCiKCKgAqAAAAAAAAAAAAAAAKgAAAAAKgAAAAAAAAAAAAAAAAAAAAAAAqAAAKIAAAAAAAAAAAAAAAAAAAAAAAAAFAAQAUAAABAFBAFQAKACoAoAAigAAAAAAAAIqAqKAAgAAAAAACoAAAAAAAAAAAogCiKAAAAAAAgAAAKgCoAAAAAFAAAAAAAAKAAAAAAAKIAogCiACoAqKAIABQAABa59ABVABYAJqUAXAAAAAATNUAAAAAAADAAAAwAH/9k=' };

export default function Monitor() {
    useDeviceContext(tw);
    const [spo2, setSpo2] = useState(90);
    const [ecg, setEcg] = useState(90);

    useEffect(() => {
        const interval = setInterval(() => {
            // Randomize values between 80 and 100
            const spo2Value = Math.floor(Math.random() * (100 - 80 + 1) + 80);
            const ecgValue = Math.floor(Math.random() * (100 - 80 + 1) + 80);

            setSpo2(spo2Value);
            setEcg(ecgValue);
        }, 1000);

        return () => clearInterval(interval); // Clear interval on component unmount

    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <StatusBar style="auto" />
                <Card />
                <View style={{ flexDirection: 'row', justifyContent: "center", marginBottom: 80 }}>
                    <View style={styles.mainCardView}>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text>SPO2</Text>
                            <View style={styles.subCardView}>
                                <Text style={{ fontSize: 30 }}>{spo2}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainCardView}>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text>ECG</Text>
                            <View style={styles.subCardView}>
                                <Text style={{ fontSize: 30 }}>{ecg}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainCardView}>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text>Condition</Text>
                            <View style={styles.subCardView}>
                                <Text style={{ fontSize: 12, color: spo2 < 90 ? 'red' : 'green' }}>
                                    {spo2 < 90 ? 'Critical' : 'Normal'}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Image
                    style={styles.card_image}
                    source={{ uri: "https://i.stack.imgur.com/bUPoH.jpg" }}
                />
            </ImageBackground >
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: "100%",
        height: "100%"
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    mainCardView: {
        height: 90,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#757373",
        borderRadius: 15,
        // shadowColor: Colors.shadow,
        flexDirection: 'column',
        // justifyContent: 'space-between',
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
    },
    subCardView: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card_image: {
        width: 350,
        height: 250,
        borderRadius: 10,
        marginLeft: 15,
        marginBottom: 20
    },
});