import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object Model</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        borderWidth: 10,
        /* backgroundColor: 'red', */
    },
    container: {
        backgroundColor: 'red',
        flex: 1,
    },
});
