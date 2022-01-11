import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Picker from "../components/Picker";
import Stat from "../components/Stat";
import colors from '../theme/colors'

const Activity = () => {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Picker
					LeftItem={<MaterialCommunityIcons name="cart" size={24} color={"gray"} />}
					label="Sales"
				/>
				<Picker
					LeftItem={<Ionicons name="link" size={24} color={"gray"} />}
					label="All chains"
				/>
			</View>
			<ScrollView style={styles.main}>
				<Stat
					order={1}
					type="activity"
					image={
						"https://picsum.photos/200?random=" +
						Math.floor(Math.random() * 9 + 1)
					}
					username="Micky Rabbit #0000"
				/>
				<Stat
					order={2}
					type="activity"
					image={
						"https://picsum.photos/200?random=" +
						Math.floor(Math.random() * 9 + 1)
					}
					username="Mask Punks #Promo"
					price={13376.71}
				/>
				<Stat
					order={3}
					type="activity"
					image={
						"https://picsum.photos/200?random=" +
						Math.floor(Math.random() * 9 + 1)
					}
					username="BADASS Apes Club Official (Free Airdrop)"
					price={7580.63}
				/>
				<Stat
					order={4}
					type="activity"
					image={
						"https://picsum.photos/200?random=" +
						Math.floor(Math.random() * 9 + 1)
					}
					username="A. B. A. C. (Advertisement)"
					price={7527.96}
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
	},
	top: {
		marginVertical: 20,
		marginHorizontal: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	main: {
		borderTopWidth: 1,
		borderTopColor: colors.medium,
	},
	image: {
		height: 20,
		width: 20,
	},
});

export default Activity;
