import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import SearchInput from "../components/SearchInput";
import Section from "../components/Section";
import NonScrollableSection from "../components/NonScrollableSection";
import Card from "../components/Card";
import UserProfileCard from "../components/UserProfileCard";
import data from "../data/mockData";
import colors from "../theme/colors";

const Search = () => {
  return (
    <ScrollView style={styles.container}>
      <SearchInput />
      <Section
        title="All categories"
        titleStyle={styles.sectionTitle}
        containerStyle={styles.sectionContainer}
        DataComponent={Card}
        data={data.categories}
      />
      <NonScrollableSection
        title="Trending collections"
        titleStyle={styles.secondSectionTitle}
        containerStyle={styles.secondSectionContainer}
        DataComponent={UserProfileCard}
        data={data.users}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  sectionContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.light,
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 25,
    marginBottom: 0,
  },
  secondSectionContainer: {
    marginTop: 0,
    marginVertical: 0,
  },
  secondSectionTitle: {
    fontSize: 18,
    marginBottom: 25,
  },
});

export default Search;
