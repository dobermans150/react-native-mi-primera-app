import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native';


interface props {
    title: string;
    position?: 'left' | 'right' | 'center';
    onPress: () => void;

}

export const Fab = ({ title, onPress, position = 'center' }: props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                style={[styles.fabLocation,
                (position === 'left') ? styles.let : styles.right,
                ]}
                onPress={onPress}
                activeOpacity={0.8}
            >
                <View style={styles.fab} >
                    <Text style={styles.fabText}>{title}</Text>
                </View>

            </TouchableOpacity>
        );
    };

    const android = () => {
        return (
            <View
                style={[styles.fabLocation,
                (position === 'left') ? styles.let : styles.right,
                ]}
            >
                <TouchableNativeFeedback

                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                    <View style={styles.fab} >
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };


    return (Platform.OS === 'ios') ? ios() : android();
};


const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25,
    },
    let: {
        left: 25,
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
