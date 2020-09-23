import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import Slider from '@react-native-community/slider';
import { styles } from "./player.styles";

import { NextIcon, PauseIcon, PlayFilledIcon, PreviousIcon, SoundIcon, SpeakerIcon } from "../../../assets/icons";
import { Surface } from "../../containers/surface.container";

const imageUri =
    'https://www.incimages.com/uploaded_files/image/1920x1080/425A8015_Retouched_283406.jpg'

const StatusBar = () => {
    return <View style={styles.statusBar}/>
};

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
};

const SoundBar = () => {
    const [sliderValue, setSliderValue] = useState({ sliderValue: 10 });
    return (
        <View style={styles.soundBarContainer}>
            <SpeakerIcon/>
            <View style={styles.soundBarSlider}>
                <Slider
                    minimumValue={16}
                    maximumValue={32}
                    thumbTintColor="#3F25E5"
                    minimumTrackTintColor="#3F25E5"
                    maximumTrackTintColor="#3D23E5"
                    step={1}
                    value={sliderValue.sliderValue}
                    onValueChange={(value) => setSliderValue({sliderValue: value})}
                />
            </View>
            <SoundIcon/>
        </View>
    )
};

const Buttons = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.touchable}>
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
            <TouchableOpacity style={styles.touchable}>
                <NextIcon/>
            </TouchableOpacity>
        </View>
    )
};

export const PlayerScreen = () => {
    return (
        <Surface style={styles.container}>
            <Image
                style={styles.videoImage}
                source={{uri: imageUri}}
            />
            <StatusBar/>
            <View style={styles.mediaContainer}>
                <Info/>
                <Buttons/>
                <SoundBar />
            </View>
        </Surface>
    )
};
