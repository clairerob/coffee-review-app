import { StyleSheet } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';

export default function ItemCard(props) {
	return (
		<Card
			title='main title'
			style={styles.myCard}
			theme={{ colors: { surface: 'pink' } }}
		>
			<Card.Content>
				<Title>{props.item.title}</Title>
			</Card.Content>

			<Card.Actions>
				<Button
					style={{ marginHorizontal: 3, marginVertical: 3 }}
					mode='contained'
					theme={{ roundness: 10 }}
					onPress={props.onPress}
				>
					click here to go to reviews
				</Button>
			</Card.Actions>
		</Card>
	);
}

const styles = StyleSheet.create({
	myCard: {
		elevation: 3,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 4,
		marginVertical: 6,
	},
});
