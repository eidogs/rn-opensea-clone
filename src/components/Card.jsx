import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

import colors from '../theme/colors';

const Card = ({title, image, size, type = "default", onCardPress}) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onCardPress}>
			<Image source={{ uri: image }} style={[styles.image, {
				width: size,
				height: size
			}]} />
			<Text style={type === "category" ? styles.categoryTitle : styles.defaultTitle}>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 10,
		marginVertical: 20
	},
	image: {
		borderRadius: 20
	},
	defaultTitle: {
		color: colors.black,
		fontSize: 18,
		letterSpacing: 1,
		marginTop: 10,
		marginLeft: 5
	},
	categoryTitle: {
		position: 'absolute',
		color: colors.white,
		fontWeight: 'bold',
		fontSize: 20,
		width: 100,
		bottom: 20,
		left: 20
	},
})

export default Card