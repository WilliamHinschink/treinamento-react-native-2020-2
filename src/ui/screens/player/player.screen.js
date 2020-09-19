import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./player.styles";

import { NextIcon, PauseIcon, PlayFilledIcon, PreviousIcon } from "../../../assets/icons";

const imageUri =
    'https://www.incimages.com/uploaded_files/image/1920x1080/425A8015_Retouched_283406.jpg'

const StatusBar = () => {
    return <View style={styles.statusBar}/>
}

const Info = () => {
    return (
        <View style={styles.textContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Zumba Class</Text>
                <Text style={styles.description}>1:00 | 3:00</Text>
            </View>
            <Text>Dancing School</Text>
        </View>
    )
}

const SoundBar = () => {
    return <View/>
}

const Buttons = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.toucheble}>
                <PreviousIcon/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.playContainer}
                onPress={() => {
                    setIsPlaying(!isPlaying)
                }}
            >
                <View style={styles.playButton}>
                    {
                        isPlaying ?
                            <PauseIcon fill="white"/> :
                            <PlayFilledIcon/>
                    }
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toucheble}>
                <NextIcon/>
            </TouchableOpacity>
        </View>
    )
}

export const PLayerScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.videoImage}
                source={{uri: imageUri}}
            />
            <StatusBar/>
            <View style={styles.mediaContainer}>
                <Info/>
                <Buttons/>
                <SoundBar/>
            </View>
        </View>
    )
}
