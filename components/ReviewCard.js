import { Image, StyleSheet, View } from 'react-native';
import { Button, Card, Paragraph, Subheading, Title } from 'react-native-paper';
import { images } from '../styles/ratingsImages';

export default function ReviewCard(props) {
	return (
		<Card
			title='main title'
			style={styles.myCard}
			theme={{ colors: { surface: '#66dddd' } }}
		>
			<Card.Content>
				<Title>{props.title}</Title>
				<View>
					<Subheading>Rating:</Subheading>
					<Image source={images.ratings[props.rating]} />
				</View>
				<Paragraph>{props.body}</Paragraph>
			</Card.Content>

			<Card.Actions>
				<Button
					style={{ marginHorizontal: 3, marginVertical: 3 }}
					mode='contained'
					theme={{ roundness: 10 }}
				>
					this doesn't do anything yet but it wil
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
