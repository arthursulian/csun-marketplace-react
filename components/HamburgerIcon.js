/*
    Just a clickable image that opens the side panel
*/
import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

import MenuSidePanel from "./MenuSidePanel";

const HamburgerIcon = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile", { user: navigation.userExists });
        }}
      >
        <Image
          style={styles.logo}
          source={require("../app/assets/Hamburger_icon-Resize-35.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    paddingLeft: 5,
    paddingTop: 7,
  },
  logo: {
    resizeMode: "contain",
    height: 40,
  },
});

export default HamburgerIcon;
