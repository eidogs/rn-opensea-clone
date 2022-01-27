import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import NFTCard from "../components/NFTCard";
import UserProfileCard from "../components/UserProfileCard";
import Section from "../components/Section";
import data from "../data/mockData";
import colors from "../theme/colors";
import AppHeader from "../components/AppHeader";

const Home = () => {
  return (
    <View style={styles.view}>
      <AppHeader title="OpenSea" />
      <ScrollView contentContainerStyle={styles.container}>
        <Section DataComponent={Card} data={data.categories} />
        <Section
          title="Notable Drops"
          DataComponent={Card}
          data={data.notableDrops}
        />
        <Section
          title="Trending collections"
          DataComponent={UserProfileCard}
          data={data.users}
        />
        <Section
          title="Hot new items"
          DataComponent={NFTCard}
          data={data.nfts}
        />
        <Section
          title="Expiring Soon"
          DataComponent={NFTCard}
          data={data.nfts}
        />
        <Section
          title="New top sellers"
          DataComponent={NFTCard}
          data={data.nfts}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    backgroundColor: colors.white,
  },
});

export default Home;
