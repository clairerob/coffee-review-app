import {
	StyleSheet,
	StatusBar,
	View,
	SafeAreaView,
	Text,
	Dimensions,
} from 'react-native';

export default function App() {
	console.log(Dimensions.get('screen'));
	return (
		<SafeAreaView style={styles.container}>
			<View style={{ backgroundColor: 'dodgerblue', width: '50%', height: 70 }}>
				<Text>it work</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'dodgerblue',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: Platform.OS === 'android' ? StatusBar.height : 0,
	},
});
