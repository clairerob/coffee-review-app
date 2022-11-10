import { useContext, useState } from 'react';
import {
	FlatList,
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
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
import { REVIEWS } from '../shared/REVIEWS';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
	const { colors } = useTheme();
	const { toggleTheme, isThemeDark } = useContext(ThemeContext);

	const [visible, setVisible] = useState(false);
	const showModal = () => setVisible(true);
	const hideModal = () => setVisible(false);

	const [reviews, setReviews] = useState(REVIEWS);

	const addReview = (review) => {
		review.key = Math.random().toString(); //DO NOT DO THIS IN PRODUCTION!!!
		setReviews((prev) => [review, ...prev]);
		hideModal();
	};

	return (
		<View style={globalStyles.container}>
			<Button onPress={toggleTheme}>theme change mebs</Button>

			<Button style={{ marginTop: 10 }} onPress={showModal}>
				<MaterialIcons name='add' size={24} style={styles.modalToggle} />
				Show
			</Button>
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
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
							<View style={styles.modalContent}>
								<MaterialIcons
									name='close'
									size={24}
									onPress={hideModal}
									style={{ ...styles.modalToggle, ...styles.modalClose }}
								/>
								<ReviewForm addReview={addReview} />
							</View>
						</TouchableWithoutFeedback>
					</Modal>
				</Portal>
			</Provider>
		</View>
	);
}

const styles = StyleSheet.create({
	modalContent: {
		width: '90%',
		height: '80%',
	},
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
