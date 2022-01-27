import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../theme/colors";

const UserProfileCard = ({
  title,
  username,
  coverImage,
  avatar,
  verified,
  scrollable,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: scrollable ? 185 : "48%",
          marginHorizontal: scrollable ? 10 : 0,
        },
      ]}
      onPress={() =>
        navigation.navigate("UserProfile", {
          user: {
            title,
            image: avatar,
            coverImage: coverImage,
            verified,
          },
        })
      }
    >
      <View style={styles.topContainer}>
        <Image
          source={{ uri: coverImage }}
          style={[
            styles.coverImage,
            {
              width: scrollable ? 185 : "100%",
            },
          ]}
          resizeMode="cover"
        />
      </View>
      <Image
        source={{ uri: avatar }}
        style={[
          styles.avatar,
          { top: scrollable ? 75 : "38%", left: scrollable ? 70 : "38%" },
        ]}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.usernameDetails}>
          <Text style={styles.title}>{title}</Text>
          {verified && (
            <MaterialCommunityIcons
              name="check-decagram"
              size={15}
              color={colors.primary}
              style={styles.icon}
            />
          )}
        </View>
        <Text style={styles.username}>{username}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginBottom: 20,
    shadowColor: colors.medium,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.41,
    elevation: 3,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topContainer: {
    flex: 1,
  },
  coverImage: {
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  avatar: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: colors.white,
    top: 75,
    left: 70,
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  usernameDetails: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "bold",
  },
  icon: {
    marginLeft: 5,
  },
  username: {
    color: colors.primary,
  },
});

export default UserProfileCard;
