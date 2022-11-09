import { StyleSheet, View } from 'react-native';
import { Headline } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {
	const openMenu = () => {
		navigation.openDrawer();
	};
	return (
		<View style={styles.header}>
			<MaterialIcons
				name='menu'
				size={28}
				style={styles.icon}
				onPress={openMenu}
			/>
			<View>
				<Headline>{title}</Headline>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		position: 'absolute',
		left: 16,
	},
});
