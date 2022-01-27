import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "../theme/colors";

const NFTCard = ({ user, title, price, likes, image, scrollable }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: scrollable ? 185 : "47%",
          marginHorizontal: scrollable ? 10 : 0,
        },
      ]}
      onPress={() =>
        navigation.navigate("NFTDetails", {
          nft: { user, title, likes, image, price },
        })
      }
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.nftDetails}>
        <View style={styles.userDetails}>
          <Text style={styles.username}>{user.username}</Text>
          {user.verified && (
            <MaterialCommunityIcons
              name="check-decagram"
              size={18}
              color={colors.primary}
              style={styles.icon}
            />
          )}
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.bottom}>
          <View style={styles.priceContainer}>
            <MaterialCommunityIcons name="ethereum" size={20} />
            <Text style={styles.price}>{price}</Text>
          </View>
          <View style={styles.likesContainer}>
            <MaterialCommunityIcons
              name="heart-outline"
              color={colors.medium}
              size={20}
            />
            <Text style={styles.likes}>{likes}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 300,
    borderWidth: 0.5,
    borderColor: colors.medium,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontSize: 15,
    color: "gray",
    letterSpacing: 1,
  },
  icon: {
    marginLeft: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 1,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  priceContainer: {
    flexDirection: "row",
  },
  price: {
    fontWeight: "bold",
    fontSize: 15,
  },
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  likes: {
    fontWeight: "bold",
    fontSize: 15,
    color: colors.gray,
    marginLeft: 7,
  },
});

export default NFTCard;
