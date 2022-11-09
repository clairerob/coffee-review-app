import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { globalStyles } from '../styles/global';
import Header from '../components/Header';

export default function ReviewDetails({ route, navigation }) {
	const { title, rating, body } = route.params;
	return (
		<View style={globalStyles.container}>
			<Header />
			<Text>{title}</Text>
			<Text>{rating}</Text>
			<Text>{body}</Text>

			<Button mode='outlined' onPress={() => navigation.navigate('Home')}>
				Go To Home
			</Button>
			<Button mode='contained' onPress={() => navigation.goBack()}>
				Go Back One
			</Button>

			<Button mode='contained' onPress={() => navigation.popToTop()}>
				Go Fully Back Home Reset To Top Of Stack
			</Button>
		</View>
	);
}
