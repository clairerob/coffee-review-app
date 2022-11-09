import 'react-native-gesture-handler';
import { useCallback, useMemo, useState, createContext } from 'react';
import {
	NavigationContainer,
	// DarkTheme as NavigationDarkTheme,
	// DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
	DarkTheme as PaperDarkTheme,
	DefaultTheme as PaperDefaultTheme,
	Provider as PaperProvider,
} from 'react-native-paper';
// import merge from 'deepmerge';
// import { ThemeContext } from './styles/ThemeContext';
import Home from './screens/home';
import About from './screens/about';
import Review from './screens/reviewDetails';
import HeaderNinja from './components/HeaderNinja';

export const ThemeContext = createContext({
	toggleTheme: () => {},
	isThemeDark: false,
});

// const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
// const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

//VANILLA JS DEEPMERGE
//
// const CombinedDefaultTheme = {
// 	...NavigationDefaultTheme,
// 	...PaperDefaultTheme,
// 	colors: {
// 		...NavigationDefaultTheme.colors,
// 		...PaperDefaultTheme.colors,
// 	},
// };
// const CombinedDarkTheme = {
// 	...NavigationDarkTheme,
// 	...PaperDarkTheme,
// 	colors: {
// 		...NavigationDarkTheme.colors,
// 		...PaperDarkTheme.colors,
// 	},
// };

const Drawer = createDrawerNavigator();

const HomeStack = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Home'
				component={Home}
				options={{ headerTitle: () => <HeaderNinja /> }}
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
				options={{ headerTitle: () => <HeaderNinja /> }}
			/>
		</Stack.Navigator>
	);
};

// const theme = {
// 	...DefaultTheme,
// 	roundness: 4,
// 	colors: {
// 		...DefaultTheme.colors,
// 		error: '#ff13ff',
// 		accent: '#99ffcc',
// 	},
// };

export default function App() {
	const [isThemeDark, setIsThemeDark] = useState(false);

	// let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
	let theme = isThemeDark ? PaperDarkTheme : PaperDefaultTheme;

	//useCallback returns the whole actual function, so it can accept parameters and be reused.
	const toggleTheme = useCallback(() => {
		return setIsThemeDark(!isThemeDark);
	}, [isThemeDark]);

	//useMemo returns the function's value and only runs the function when the watched values change. avoid re-running with referential equality concerns
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
					<Drawer.Navigator>
						<Drawer.Screen
							name='HomeStack'
							component={HomeStack}
							options={{ headerShown: false }}
						/>
						<Drawer.Screen name='About' component={AboutStack} />
					</Drawer.Navigator>
				</NavigationContainer>
			</PaperProvider>
		</ThemeContext.Provider>
	);
}
