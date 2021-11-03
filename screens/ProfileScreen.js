import React from "react";

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ProfileBio = (props) => {
  return (
    <View>
      <Text>{props.content}</Text>
    </View>
  );
};

const ProfileDetail = (props) => {
  return (
    <View>
      <Text>
        {props.category}: <Text style={styles.bold}>{props.value}</Text>
      </Text>
    </View>
  );
};

function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://images.unsplash.com/photo-1534125956906-1941fd729155?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
          }}
        />
        <Text style={styles.profileTitle}>Nick Johnsmith</Text>

        <Text style={styles.profileHeader}>Details</Text>
        <ProfileDetail category="Join Date" value="10/27/2021" />
        <ProfileDetail category="Rating" value="4 stars" />
        <ProfileDetail category="Major" value="Computer Science" />
        <ProfileDetail category="Gender" value="Yes" />

        <Text style={styles.profileHeader}>Bio</Text>
        <ProfileBio content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus enim neque, a luctus dolor euismod vitae. Vivamus volutpat venenatis elementum. Mauris vestibulum finibus leo eu luctus. Quisque commodo quis nibh eu blandit. Duis aliquet fringilla ullamcorper. Proin eleifend finibus sapien, non faucibus tellus. Etiam vulputate odio sit amet eros pharetra, faucibus fringilla lectus gravida." />

        <Text style={styles.profileHeader}>Listed Items</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    alignSelf: "center",
    width: 256,
    height: 256,
    margin: 32,
  },

  profileHeader: {
    color: "grey",
    marginTop: 16,
    marginBottom: 4,
    fontSize: 24,
  },

  profileTitle: {
    alignSelf: "center",
    justifyContent: "center",
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },

  bold: {
    fontWeight: "bold",
  },

  container: {
    padding: 16,
  },
});

export default ProfileScreen;
