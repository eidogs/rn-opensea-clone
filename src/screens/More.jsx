import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../theme/colors";

const socialNetworks = [
	{
		name: "Twitter",
		icon: "twitter",
		color: colors.primary,
	},
	{
		name: "Instagram",
		icon: "instagram",
		color: colors.purple,
	},
	{
		name: "Discord",
		icon: "discord",
		color: colors.cyan,
	},
	{
		name: "Reddit",
		icon: "reddit",
		color: colors.orange,
	},
	{
		name: "Youtube",
		icon: "youtube",
		color: colors.red,
	},
];

const More = () => {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.top}>
				<TouchableOpacity style={styles.link}>
					<Text style={styles.title}>About</Text>
					<MaterialCommunityIcons
						name="chevron-right"
						size={30}
						color={colors.grey}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.link}>
					<Text style={styles.title}>Blog</Text>
					<MaterialCommunityIcons
						name="chevron-right"
						size={30}
						color={colors.grey}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.link}>
					<Text style={styles.title}>Help</Text>
					<MaterialCommunityIcons
						name="chevron-right"
						size={30}
						color={colors.grey}
					/>
				</TouchableOpacity>
			</View>
			<Text style={styles.sectionTitle}>Follow us</Text>
			<View style={styles.socialNetworks}>
				{socialNetworks.map((socialNetwork) => (
					<TouchableOpacity
						key={socialNetwork.name}
						style={[
							styles.socialNetwork,
							{
								backgroundColor: socialNetwork.color,
							},
						]}
					>
						<View style={styles.content}>
							<MaterialCommunityIcons
								name={socialNetwork.icon}
								size={30}
								color={colors.white}
							/>
							<Text style={styles.name}>
								{socialNetwork.name}
							</Text>
						</View>
					</TouchableOpacity>
				))}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
	},
	top: {},
	link: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingVertical: 30,
		borderBottomWidth: 0.3,
		borderBottomColor: colors.light,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	sectionTitle: {
		marginTop: 20,
		marginLeft: 20,
		fontWeight: "bold",
		fontSize: 15,
	},
	socialNetworks: {
		flexDirection: 'row',
		flexWrap: 'wrap', 
		alignItems: 'center',
		justifyContent: 'space-between',
		marginHorizontal: 20,
		marginTop: 20
	},
	content: {
		marginLeft: 20,
		marginTop: 120
	},
	socialNetwork: {
		width: '47%',
		height: 200,
		marginBottom: 20,
		borderRadius: 20
	},
	name: {
		fontWeight: "bold",
		color: colors.white,
		fontSize: 18,
		letterSpacing: 1,
		marginTop: 5
	}
});

export default More;
