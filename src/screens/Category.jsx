import React from "react";
import { View, ScrollView, Image, TouchableOpacity, Text, StyleSheet } from "react-native";

import UserProfileCard from "../components/UserProfileCard";
import Section from '../components/Section'
import SearchInput from "../components/SearchInput";
import NFTCard from "../components/NFTCard";
import ItemHeader from "../components/ItemHeader";
import data from '../data/mockData';
import colors from "../theme/colors";

const Category = ({ route }) => {
	const { category: { title, image } } = route.params;

	return (
		<ScrollView style={styles.container}>
			<ItemHeader { ...{title, image } } />
			<Section titleStyle={styles.sectionTitle} title="Trending collections" DataComponent={UserProfileCard} data={data.users} />
			<SearchInput />
			<Section DataComponent={NFTCard} data={data.nfts} flatlist />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
	},
	sectionTitle: {
		fontSize: 20,
		marginTop: 10,
	},
});

export default Category;
