import { StyleSheet, View } from 'react-native';
import { Headline } from 'react-native-paper';

export default function Home() {
	return (
		<View style={styles.container}>
			<Headline>Home Screen</Headline>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
	},
});
