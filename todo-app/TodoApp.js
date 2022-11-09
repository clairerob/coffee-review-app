import React, { useState } from 'react';
import {
	Alert,
	FlatList,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
	Keyboard,
} from 'react-native';
import Header from './Header';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

export default function App() {
	const [todos, setTodos] = useState([
		{ text: 'buy coffee', key: '1' },
		{ text: 'create an app', key: '2' },
		{ text: 'play on the switch', key: '3' },
	]);

	const pressHandler = (key) => {
		setTodos((prev) => {
			return prev.filter((todo) => todo.key != key);
		});
	};

	const submitHandler = (text) => {
		if (text.length > 4) {
			setTodos((prev) => {
				return [...prev, { text: text, key: Math.random().toString() }];
			});
		} else {
			Alert.alert('OOPS', 'Todos must be at least 5 chars long', [
				{ text: 'Understood', onPress: () => console.log('alert closed') },
			]);
		}
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Header />
				<View style={styles.content}>
					<AddTodo submitHandler={submitHandler} />
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={({ item }) => (
								<TodoItem item={item} pressHandler={pressHandler} />
							)}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	content: {
		flex: 1,
		padding: 40,
	},
	list: {
		flex: 1,
		marginTop: 20,
	},
});
