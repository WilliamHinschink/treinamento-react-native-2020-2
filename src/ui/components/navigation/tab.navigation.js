import React from 'react'
import { HomeScreen, PlayerScreen } from "../../screens";
import { BottomNavigation } from '../navigation/bottom-navigation.component'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Routes } from "./tab.routes";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={Routes.HOME}
                tabBar={(props) => <BottomNavigation {...props}/>}
            >
                <Tab.Screen name={Routes.HOME} component={HomeScreen}/>
                <Tab.Screen name={Routes.PLAYER} component={PlayerScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
};
