import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";

const CartIcon = (props) => {
  return (
    <View style={styles.cartContainer}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          // Make this navigate to the user's cart
          // or make a drop-down of cart's current contents
        }}
      >
        <Image
          style={styles.cartIcon}
          source={require("../app/assets/CartIcon-Resize-35.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cartIcon: { resizeMode: "contain", height: 30 },
  cartContainer: {
    padding: 10,
  },
});
export default CartIcon;
