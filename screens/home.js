import { useContext, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import {
	useTheme,
	Switch,
	TouchableRipple,
	Headline,
	Button,
	Portal,
	Modal,
	Provider,
	Title,
	Text,
} from 'react-native-paper';
import { ThemeContext } from '../styles/ThemeContext';
import { globalStyles } from '../styles/global';
import ItemCard from '../components/ItemCard';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
	const { colors } = useTheme();
	const { toggleTheme, isThemeDark } = useContext(ThemeContext);
	const [isSwitchOn, setIsSwitchOn] = useState(false);

	const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

	const [visible, setVisible] = useState(false);

	const showModal = () => setVisible(true);
	const hideModal = () => setVisible(false);

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
			<Headline>Home Screen</Headline>
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
					<ItemCard
						item={item}
						onPress={() => navigation.navigate('Review', item)}
					/>
				)}
			/>
			<Button onPress={() => navigation.navigate('AboutStack')}>
				About Us
			</Button>
			<Provider>
				<Portal>
					<Modal
						visible={visible}
						onDismiss={hideModal}
						contentContainerStyle={{
							backgroundColor: '#9adfed',
							padding: 20,
							width: '90%',
							height: '70%',
							alignItems: 'center',
							justifyContent: 'center',
							alignSelf: 'center',
						}}
					>
						<View style={styles.modalContent}>
							<MaterialIcons
								name='close'
								size={24}
								onPress={() => hideModal}
								style={{ ...styles.modalToggle, ...styles.modalClose }}
							/>
							<Title>Modal!</Title>
							<Text>stuff in modal</Text>
						</View>
					</Modal>
				</Portal>
				<Button style={{ marginTop: 30 }} onPress={showModal}>
					<MaterialIcons name='add' size={24} style={styles.modalToggle} />
					Show
				</Button>
			</Provider>
		</View>
	);
}

const styles = StyleSheet.create({
	modalToggle: {
		marginBottom: 10,
		borderWidth: 1,
		padding: 10,
		borderRadius: 10,
		alignSelf: 'center',
	},
	modalClose: {
		marginTop: 20,
		marginBottom: 0,
	},
});
