import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Headline } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {
	const openMenu = () => {
		navigation.openDrawer();
	};
	return (
		<ImageBackground
			source={require('../assets/coffee-bg.jpg')}
			style={styles.header}
		>
			<MaterialIcons
				name='menu'
				size={28}
				style={styles.icon}
				onPress={openMenu}
			/>
			<View style={styles.headerTitle}>
				<Image
					source={require('../assets/heart_logo.png')}
					style={styles.headerImage}
				/>
				<Headline>{title}</Headline>
			</View>
		</ImageBackground>
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
	headerTitle: {
		flexDirection: 'row',
	},
	headerImage: {
		width: 26,
		height: 26,
		marginHorizontal: 10,
	},
});
