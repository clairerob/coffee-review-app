import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	TouchableNativeFeedback,
	View,
	Image,
	SafeAreaView,
	Alert,
	Button,
	Platform,
} from 'react-native';

export default function Mott() {
	return (
		<>
			<StatusBar />
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity
						onPress={() =>
							Alert.alert('alert alert', 'img pressed', [
								{
									text: 'yes',
									style: {
										color: 'blue',
										backgroundColor: 'orange',
										borderRadius: 5,
									},
									onPress: () => console.log('alert yes'),
								},
								{
									text: 'no',
									style: styles.text,
									onPress: () => console.log('alert no'),
								},
							])
						}
					>
						<Image
							style={{
								borderRadius: 20,
							}}
							fadeDuration={500}
							source={{
								uri: 'https://picsum.photos/200/300',
								width: 300,
								height: 200,
							}}
						/>
					</TouchableOpacity>
					<Text style={styles.boldText}>
						Open up App.js to start working on your app!
					</Text>
					<TouchableHighlight onPress={() => console.log('icon pressed')}>
						<Image source={require('./assets/favicon.png')} />
					</TouchableHighlight>
				</View>
				<View style={styles.body}>
					<Text style={styles.text}>oooooh it's some text</Text>
					<TouchableNativeFeedback
						onPress={() => console.log('native tap')}
						style={{ width: 200, height: 70, backgroundColor: 'yellow' }}
					>
						<Text style={styles.text}>oooooh it's some text</Text>
					</TouchableNativeFeedback>
					<Text>oooooh it's some naked text</Text>
					<Text style={styles.text}>oooooh it's some text</Text>
				</View>
				<Button
					title='Click Me'
					onPress={() =>
						Alert.prompt('alert prompt', 'ios only', (text) =>
							console.log(text)
						)
					}
					style={{ borderRadius: 15, backgroundColor: 'yellow' }}
				/>
			</SafeAreaView>
		</>
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
	header: {
		fontSize: '30px',
		backgroundColor: 'pink',
		borderRadius: 20,
		padding: 20,
	},
	boldText: {
		color: 'red',
	},
	text: {
		color: 'pink',
	},
	body: {
		backgroundColor: 'purple',
		borderRadius: 20,
		padding: 20,
	},
});
