import { useContext, useState } from 'react';
import { FlatList, View } from 'react-native';
import {
	useTheme,
	Switch,
	TouchableRipple,
	Headline,
	List,
	Button,
} from 'react-native-paper';
import { ThemeContext } from '../styles/ThemeContext';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
	const { colors } = useTheme();
	const { toggleTheme, isThemeDark } = useContext(ThemeContext);
	const [isSwitchOn, setIsSwitchOn] = useState(false);

	const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

	const [reviews, setReviews] = useState([
		{
			title: 'Zelda, Breath of Fresh Air',
			rating: 4,
			body: 'lorem ipsum lorem',
			key: '1',
		},
		{
			title: 'Pokemons Catch Them',
			rating: 5,
			body: 'lorem ipsum lorem',
			key: '2',
		},
		{
			title: 'Not So "Final" Eh',
			rating: 2,
			body: 'lorem ipsum lorem',
			key: '3',
		},
	]);

	return (
		<View style={globalStyles.container}>
			<Headline style={{ backgroundColor: colors.primary }}>
				Home Screen
			</Headline>
			<TouchableRipple onPress={() => toggleTheme()}>
				<Switch
					style={[{ backgroundColor: colors.accent }]}
					value={isThemeDark}
					onValueChange={onToggleSwitch}
				/>
			</TouchableRipple>
			<FlatList
				data={reviews}
				renderItem={({ item }) => (
					<List.Item
						style={{ color: colors.secondary }}
						title={item.title}
						onPress={() => navigation.navigate('Review', item)}
					/>
				)}
			/>
			<Button onPress={() => navigation.navigate('AboutStack')}>
				About Us
			</Button>
		</View>
	);
}
