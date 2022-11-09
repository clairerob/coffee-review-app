import { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Home from './screens/home';
import About from './screens/about';
import Review from './screens/reviewDetails';

const theme = {
	...DefaultTheme,
	roundness: 4,
	colors: {
		...DefaultTheme.colors,
		error: '#ff13ff',
		accent: '#99ffcc',
	},
};

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<Home />
		</PaperProvider>
	);
}
