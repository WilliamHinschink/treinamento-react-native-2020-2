import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ListIcon, PlayIcon } from '../../../assets/icons'
import { styles } from './bottom-navigation.style'
import { Routes } from '../navigation/tab.routes'

const ICONS = {
    [Routes.HOME]: ListIcon,
    [Routes.PLAYER]: PlayIcon,
};

export const BottomNavigation = ({navigation, state}) => {

    return (
        <View style={styles.styleSheet.container}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const color = isFocused ? styles.colors.white : styles.colors.gray;
                const Icon = ICONS[route.name];

                const onPress = () => {
                    navigation.navigate(route.name)
                };

                return (
                    <TouchableOpacity
                        key={route.name}
                        onPress={onPress}
                    >
                        <View>
                            {Icon && <Icon fill={color}/>}
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )

};
