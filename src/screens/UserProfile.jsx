import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import UserItems from "./UserItems";
import UserActivity from "./UserActivity";

import ItemHeader from "../components/ItemHeader";
import colors from "../theme/colors";

const Tab = createMaterialTopTabNavigator();

const UserProfile = ({ route }) => {
  const {
    user: { title, coverImage, image, verified },
  } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ItemHeader {...{ title, image, coverImage, verified }} />
      <View style={styles.icons}>
        <MaterialCommunityIcons name="discord" color={colors.grey} size={30} />
        <FontAwesome5 name="telegram" color={colors.grey} size={30} />
        <MaterialCommunityIcons name="twitter" color={colors.grey} size={30} />
        <MaterialCommunityIcons
          name="instagram"
          color={colors.grey}
          size={30}
        />
        <MaterialCommunityIcons name="reddit" color={colors.grey} size={30} />
      </View>
      <View style={styles.details}>
        <View style={styles.detail}>
          <Text style={styles.price}>500</Text>
          <Text style={styles.description}>items</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.price}>100</Text>
          <Text style={styles.description}>owners</Text>
        </View>
        <View style={styles.detail}>
          <View style={styles.priceContainer}>
            <MaterialCommunityIcons name="ethereum" size={20} />
            <Text style={styles.price}>0.5</Text>
          </View>
          <Text style={styles.description}>floor price</Text>
        </View>
        <View style={styles.detail}>
          <View style={styles.priceContainer}>
            <MaterialCommunityIcons name="ethereum" size={20} />
            <Text style={styles.price}>200</Text>
          </View>
          <Text style={styles.description}>traded</Text>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            textTransform: "none",
            fontWeight: "bold",
            fontSize: 16,
          },
          tabBarItemStyle: {
            flexDirection: "row",
            alignItems: "center",
          },
          tabBarIndicatorStyle: {
            backgroundColor: colors.primary,
            height: 5,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        <Tab.Screen
          name="Items"
          component={UserItems}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="list" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Activity"
          component={UserActivity}
          options={{
            tabBarIcon: ({ color }) => (
              <SimpleLineIcons name="graph" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  icons: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  detail: {
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 5,
  },
  description: {
    color: colors.medium,
    fontWeight: "bold",
  },
});

export default UserProfile;
