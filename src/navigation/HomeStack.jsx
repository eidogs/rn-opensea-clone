import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home';

const Stack = createStackNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator screenOptions={{
			headerShown: false
		}}>
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	)
}

export default HomeStack