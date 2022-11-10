import { View } from 'react-native';
import { Headline } from 'react-native-paper';
import { globalStyles } from '../styles/global';
import ButtonNinja from '../components/ButtonNinja';

export default function About({ navigation }) {
	return (
		<View style={globalStyles.container}>
			<Headline>About Screen</Headline>
			<ButtonNinja text='Go Back Home' onPress={() => navigation.goBack()} />
		</View>
	);
}
