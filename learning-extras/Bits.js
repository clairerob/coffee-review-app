import { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native';

export default function BitsTwo() {
	const [people, setPeople] = useState([
		{ name: 'shaun', key: '1' },
		{ name: 'emma', key: '2' },
		{ name: 'peter', key: '3' },
		{ name: 'andres', key: '4' },
		{ name: 'nina', key: '5' },
		{ name: 'tempest', key: '6' },
		{ name: 'shoshanna', key: '7' },
	]);
	const pressHandler = (key) => {
		console.log(key);
		setPeople((prev) => {
			return prev.filter((person) => person.key != key);
		});
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={people}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => pressHandler(item.key)}>
						<Text style={styles.item}>{item.name}</Text>
					</TouchableOpacity>
				)}
			/>

			{/* <ScrollView>
				{people.map((person) => (
					<View key={person.key}>
						<Text style={styles.item}>{person.name}</Text>
					</View>
				))}
			</ScrollView> */}
		</View>
	);
}

export default function BitsOne() {
const [name, setName] = useState('claire');
const [person, setPerson] = useState({ name: 'teflon', age: 70 });
const [story, setStory] = useState({
	story: 'something happened today...',
	id: 0,
});

const handlePress = () => {
	setName((prevName) => {
		if (prevName === 'claire') {
			return 'willie';
		} else return 'claire';
	});
	setPerson((prevPerson) => {
		return {
			...prevPerson,
			age: prevPerson.age === 70 ? 3 : prevPerson.age === 3 ? 70 : 'oops',
		};
	});
};

	return (
		<View style={styles.container}>
			<Text style={styles.txt}>My name is {name}</Text>
			<Text style={styles.txt}>and my story today is:</Text>
			<Text style={styles.storytxt}>{story.story}</Text>
			<Text style={styles.txt}>
				Her name is {person.name} and her age is {person.age}
			</Text>
			<View style={styles.buttonContainer}>
				<Button title='all change' onPress={handlePress} />
			</View>
			<Text style={styles.txt}>enter story:</Text>
			<TextInput
				multiline
				style={styles.input}
				placeholder='bond is a sillyface who eats bugs'
				onChangeText={(val) => setStory((prev) => ({ ...prev, story: val }))}
			/>
			<Text style={styles.txt}>how many treats?</Text>
			<TextInput
				keyboardType='numeric'
				style={styles.input}
				onChangeText={(val) => setStory((prev) => ({ ...prev, id: val }))}
			/>
			<Text style={styles.txt}>
				{story.id ? `${story.id}000000 treats???` : `no treats for bondcat :(`}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#33aaaa',
		paddingTop: 40,
		paddingHorizontal: 20,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	buttonContainer: {
		marginTop: 20,
	},
	input: {
		borderWidth: 2,
		borderColor: 'orange',
		padding: 8,
		margin: 10,
		width: 200,
	},
	txt: {
		padding: 6,
	},
	storytxt: {
		padding: 8,
		color: 'red',
		fontWeight: 'bold',
	},
	item: {
		marginTop: 28,
		padding: 30,
		backgroundColor: '#ffff99',
		fontSize: 24,
	},
});
