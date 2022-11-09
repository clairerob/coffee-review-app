import { useContext, useState } from 'react';
import { useTheme, Appbar, TouchableRipple, Switch } from 'react-native-paper';
import { ThemeContext } from '../styles/ThemeContext';

const Header = () => {
	const theme = useTheme();
	const { toggleTheme, isThemeDark } = useContext(ThemeContext);
	const [switchStatus, setSwitchStatus] = useState(false);

	const toggleSwitch = () => setSwitchStatus(!switchStatus);

	return (
		<Appbar.Header
			theme={{
				colors: {
					primary: theme?.colors.surface,
				},
			}}
		>
			{/* <Appbar.Content title={scene.route?.name} /> */}
			<Appbar.Content title={'placeholder text'} />
			<TouchableRipple onPress={() => toggleTheme()}>
				<Switch value={isThemeDark} onValueChange={toggleSwitch} />
			</TouchableRipple>
		</Appbar.Header>
	);
};

export default Header;
