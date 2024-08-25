import React, { useState } from 'react';
import { Button, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import App from './App';

const StartUp = () => {
    const [startGame,setStartGame]=useState(false)
    return (
        <View style={styles.container}>
        {
            startGame ? 
                <App /> 
            :
            <ImageBackground 
                source={{ uri: 'https://play-lh.googleusercontent.com/_OV39-FmSQR8X6t-Ya4q9iQOfCvxZJ55GWSjhBbDF3P-UOEWnGjFkoIcnOtQvrmlvqLD' }} 
                style={styles.backgroundImage}
            >
                <Pressable onPress={() => setStartGame(true)} style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Start Game</Text>
                    </View>
                </Pressable>
            </ImageBackground>
        }
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50, // Position button 50 pixels from the bottom of the screen
        width: '80%',
    },
    button: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default StartUp;
