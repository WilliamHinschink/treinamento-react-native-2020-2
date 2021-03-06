import React from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ArrowIcon } from '../../../assets/icons/arrow.icon'

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const PlaylistCard = ({ image, title, duration, quantity }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: image}} style={styles.image} />
                <View style={[styles.overlay, {backgroundColor: getRandomColor()}]} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text>{duration}. </Text>
                    <Text>{quantity} videos</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => alert('oi')} style={styles.button}>
                <ArrowIcon />
            </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 140,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 10,
        zIndex: 1,
    },
    imageContainer: {
        width: 150,
        height: 100,
        position: 'relative',
        ...Platform.OS == 'ios' ?
            {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 5
                },
                shadowOpacity: 0.25,
                shadowRadius: 5,
            }
            : {
                elevation: 5,
            }
    },
    overlay: {
        width: 150,
        height: 100,
        position: 'absolute',
        borderRadius: 10,
        opacity: 0.5,
        zIndex: 2,
    },
    textContainer: {
        marginStart: 10,
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#414141',
    },
    description: {
        fontSize: 12,
        lineHeight: 14,
        color: '#A0A0A0',
    },
    button: {
        height: 100,
        width: 44,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});
