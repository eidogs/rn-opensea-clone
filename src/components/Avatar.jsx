import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../theme/colors';

const Avatar = ({ image, size = 50, online, circle, style }) => {
	return (
		<View style={[styles.container, {
			width: size,
			height: size
		}, style]}>
			{circle && online && <MaterialCommunityIcons style={[styles.icon, {
				left: size * 0.75,
				top: size * 0.02
			}]} name="circle" size={15} color={colors.online} />}
			<Image source={{ uri: image }} style={{
				width: size,
				height: size,
				borderRadius: circle ? size/2 : size/5,
				borderWidth: 0.5
			}} />
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		position: 'absolute',
		zIndex: 1
	}
})

export default Avatar