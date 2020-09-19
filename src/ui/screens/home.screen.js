import React, { useState, useEffect } from "react";
import { FlatList, Text, View, ActivityIndicator } from "react-native";
import { PlaylistCard } from "../components/playslist-card.components";
import { PlaylistMock } from "../mock/playlist.mock";

export const HomeScreen = () => {
    const  [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    })

    const renderItem = ({item}) => {
        const {imageUrl, title} = item;

        return (
            <PlaylistCard
                image={imageUrl}
                title={title}
                duration={item.duration}
                quantity={item.quantity}
            />
        )
    };

    const Content = () => {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                paddingTop: 20,
                paddingHorizontal: 30
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    color: '#414141',
                    fontSize: 32,
                    marginTop: 30
                }}
                >Playlists</Text>
                <FlatList
                    data={PlaylistMock.data}
                    keyExtractor={(item) => {
                        item.id
                    }}
                    renderItem={renderItem}
                    contentContainerStyle={{paddingHorizontal: 20}}
                />
            </View>
        )
    }

    const Loader = () => {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color={'purple'} size={'large'} />
            </View>
        )
    }

    return isLoading ? <Loader /> : <Content />;
}
