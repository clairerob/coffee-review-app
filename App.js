import 'react-native-gesture-handler';
import { useCallback, useMemo, useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeContext } from './styles/ThemeContext';
import Home from './screens/home';
import About from './screens/about';
import Review from './screens/reviewDetails';
import HeaderNinja from './components/HeaderNinja';
// import Header from './components/Header';
import {
	CombinedDarkTheme,
	CombinedDefaultTheme,
} from './styles/combinedThemes';

const Drawer = createDrawerNavigator();

const HomeStack = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Home'
				component={Home}
				options={({ navigation }) => ({
					headerTitle: () => (
						<HeaderNinja navigation={navigation} title='GameZone' />
					),
				})}
			/>
			<Stack.Screen
				name='Review'
				component={Review}
				options={({ route }) => ({ title: route.params.title })}
			/>
		</Stack.Navigator>
	);
};

const AboutStack = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='About'
				component={About}
				options={({ navigation }) => ({
					headerTitle: () => (
						<HeaderNinja navigation={navigation} title='About GameZone' />
					),
				})}
			/>
		</Stack.Navigator>
	);
};

export default function App() {
	const [isThemeDark, setIsThemeDark] = useState(false);
	let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

	const toggleTheme = useCallback(() => {
		console.log('is this running within app');
		return setIsThemeDark((isThemeDark) => !isThemeDark);
	}, [isThemeDark]);

	const themeChoice = useMemo(
		() => ({
			toggleTheme,
			isThemeDark,
		}),
		[toggleTheme, isThemeDark]
	);

	return (
		<ThemeContext.Provider value={themeChoice}>
			<PaperProvider theme={theme}>
				<NavigationContainer>
					<Drawer.Navigator screenOptions={{ headerShown: false }}>
						<Drawer.Screen
							name='HomeStack'
							options={{ title: 'Home' }}
							component={HomeStack}
						/>
						<Drawer.Screen
							name='AboutStack'
							options={{ title: 'About' }}
							component={AboutStack}
						/>
					</Drawer.Navigator>
				</NavigationContainer>
			</PaperProvider>
		</ThemeContext.Provider>
	);
}
