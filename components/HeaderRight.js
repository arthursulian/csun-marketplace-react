import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import HamburgerIcon from "./HamburgerIcon";
import CartIcon from "./CartIcon";

const HeaderRight = (props) => {
  return (
    <View style={styles.cartContainer}>
      <CartIcon />
      <HamburgerIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    flexDirection: "row",
  },
});

export default HeaderRight;
