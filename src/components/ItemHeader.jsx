import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Avatar from "../components/Avatar";
import colors from "../theme/colors";

const ItemHeader = ({ title, image, coverImage, verified }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.header}>
			<View style={styles.imagesContainer}>
				<TouchableOpacity style={[styles.icon, { top: 20, left: 20 }]} onPress={() => navigation.pop()}>
					<MaterialCommunityIcons name="chevron-left" size={30} color={colors.grey} />
				</TouchableOpacity>
				<TouchableOpacity style={[styles.icon, { top: 20, right: 20 }]}>
					<MaterialCommunityIcons name="filter-variant" size={30} color={colors.grey} />
				</TouchableOpacity>
				<TouchableOpacity style={[styles.icon, { bottom: 20, right: 20 }]}>
					<Ionicons name="share-social-outline" size={30} color={colors.grey} />
				</TouchableOpacity>
				<Image
					source={{ uri: coverImage ? coverImage : image }}
					style={styles.image}
					resizeMode="cover"
				/>
				<Avatar style={styles.avatar} image={image} size={100} circle />
			</View>
			<View style={styles.details}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{title}</Text>
					{verified && (
						<MaterialCommunityIcons
							name="check-decagram"
							size={20}
							color={colors.primary}
							style={styles.verifiedIcon}
						/>
					)}
				</View>
				<Text style={styles.description}>
					Dolor proident est duis esse ea ullamco cupidatat anim
					laboris consequat occaecat anim id laborum aute dolor in.
				</Text>
				<TouchableOpacity style={styles.more}>
					<Text style={styles.moreText}>+ more</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {	
		marginHorizontal: 10,
	},
	icon: {
		position: 'absolute',
		zIndex: 2,
		backgroundColor: colors.white,
		borderRadius: 25,
		padding: 10
	},
	image: {
		width: '100%',
		height: 250
	},
	avatar: {
		position: 'absolute',
		bottom: 5,
		left: 30
	},
	details: {
		marginTop: 20
	},
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		letterSpacing: 1
	},
	verifiedIcon: {
		marginLeft: 10,
	},
	description: {
		color: colors.medium,
		fontWeight: 'bold'
	},
	more: {
		marginTop: 10
	},
	moreText: {
		fontWeight: 'bold',
		color: colors.grey
	}
})

export default ItemHeader