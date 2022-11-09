import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
	return (
		<View style={styles.container}>
			<Text style={styles.boxOne}>One</Text>
			<Text style={styles.boxTwo}>Two</Text>
			<Text style={styles.boxThree}>Three</Text>
			<Text style={styles.boxFour}>Four</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// flexDirection: 'row',
		paddingTop: 40,
		backgroundColor: '#d3d',
		justifyContent: 'space-around', //how items should be spread out along main axis - remember other flex properties of container  to make sure container stretches far enough to do what you want
		alignItems: 'center',
	},
	boxOne: {
		backgroundColor: 'gold',
		padding: 10,
		flex: 1,
	},
	boxTwo: {
		backgroundColor: 'blue',
		padding: 20,
	},
	boxThree: {
		backgroundColor: 'coral',
		padding: 30,
	},
	boxFour: {
		backgroundColor: 'green',
		padding: 40,
	},
});
