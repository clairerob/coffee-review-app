import { useContext, useState } from 'react';
import { useTheme, Appbar, TouchableRipple, Switch } from 'react-native-paper';
import { ThemeContext } from '../styles/ThemeContext';

const Header = () => {
	const theme = useTheme();
	const { toggleTheme, isThemeDark } = useContext(ThemeContext);

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
			<Switch value={isThemeDark} onValueChange={toggleTheme} />
		</Appbar.Header>
	);
};

export default Header;
