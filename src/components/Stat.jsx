import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../theme/colors";
import Avatar from "./Avatar";

const Stat = ({ order, image, username, price, type }) => {
  return (
    <View style={styles.container}>
      {type === "rankings" && <Text style={styles.order}>{order}</Text>}
      <View style={styles.details}>
        <Avatar image={image} size={65} circle={type === "rankings"} online />
        <View style={styles.userDetails}>
          <Text style={styles.username}>{username}</Text>
          <TouchableOpacity style={styles.more}>
            <Text style={styles.moreText}>+ More</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={type === "rankings" ? styles.priceDetails : styles.saleDetails}
      >
        {type === "rankings" && (
          <MaterialCommunityIcons name="ethereum" size={18} />
        )}
        <Text
          style={[
            styles.price,
            {
              textAlign: type === "activity" ? "right" : "left",
            },
          ]}
        >
          {type === "rankings" ? price : "Sale"}
        </Text>
        {type === "activity" && <Text style={styles.time}>21 seconds ago</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 45,
    borderBottomWidth: 0.5,
    paddingHorizontal: 10,
    borderBottomColor: colors.medium,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  order: {
    fontWeight: "bold",
    fontSize: 20,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userDetails: {
    justifyContent: "space-between",
  },
  username: {
    fontWeight: "bold",
    width: 200,
    marginBottom: 20,
    marginLeft: 15,
  },
  more: {
    marginLeft: 15,
  },
  moreText: {
    color: colors.gray,
    fontWeight: "bold",
  },
  priceDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontWeight: "bold",
  },
  saleDetails: {
    textAlign: "right",
  },
  time: {
    color: colors.grey,
    fontWeight: "bold",
    fontSize: 13,
  },
});

export default Stat;
