import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Picker from "../components/Picker";
import Stat from "../components/Stat";
import colors from '../theme/colors'

const Rankings = () => {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Picker
					LeftItem={
						<Image
							source={{
								uri:
									"https://picsum.photos/200?random=" +
									Math.floor(Math.random() * 9 + 1),
							}}
							style={styles.image}
						/>
					}
					label="All categories"
				/>
				<Picker
					LeftItem={<Ionicons name="link" size={24} color={"gray"} />}
					label="All chains"
				/>
			</View>
			<ScrollView style={styles.main}>
				<Stat
					order={1}
					type="rankings"
					image={
						"https://picsum.photos/200?random=" +
						Math.floor(Math.random() * 9 + 1)
					}
					username="CLONE X - X TAKASHI MURAKAMI"
					price={35977.13}
				/>
				<Stat
					order={2}
					type="rankings"
					image={
						"https://picsum.photos/200?random=" +
						Math.floor(Math.random() * 9 + 1)
					}
					username="RTFKT - CloneX Mintvial"
					price={13376.71}
				/>
				<Stat
					order={3}
					type="rankings"
					image={
						"https://picsum.photos/200?random=" +
						Math.floor(Math.random() * 9 + 1)
					}
					username="NeoTokyo Outer Identities"
					price={7580.63}
				/>
				<Stat
					order={4}
					type="rankings"
					image={
						"https://picsum.photos/200?random=" +
						Math.floor(Math.random() * 9 + 1)
					}
					username="CryptoPunks"
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
		borderTopColor: colors.gray,
	},
	image: {
		height: 20,
		width: 20,
	},
});

export default Rankings;
