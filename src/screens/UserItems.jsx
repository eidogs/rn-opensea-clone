import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import NonScrollableSection from "../components/NonScrollableSection";
import SearchInput from "../components/SearchInput";
import NFTCard from "../components/NFTCard";

import data from "../data/mockData";
import colors from "../theme/colors";

const UserItems = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <SearchInput />
      <NonScrollableSection DataComponent={NFTCard} data={data.nfts} />
    </ScrollView>
  );
};

export default UserItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
