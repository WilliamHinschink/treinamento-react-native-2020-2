import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from "./src/screens/home.screen";
import { PLayerScreen } from "./src/screens/player/player.screen";

export default function App() {
	return (
		<PLayerScreen />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
