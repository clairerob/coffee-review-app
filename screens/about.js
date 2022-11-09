import { View } from 'react-native';
import { Button, Headline } from 'react-native-paper';
import { globalStyles } from '../styles/global';

export default function About({ navigation }) {
	return (
		<View style={globalStyles.container}>
			<Headline>About Screen</Headline>
			<Button onPress={() => navigation.goBack()}>Go Back Home</Button>
		</View>
	);
}
