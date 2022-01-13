import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home';
import CategoryScreen from '../screens/CategoryScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator screenOptions={{
			headerShown: false
		}}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Category" component={CategoryScreen} />
		</Stack.Navigator>
	)
}
export default HomeStack