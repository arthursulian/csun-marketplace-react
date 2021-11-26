import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <View style={styles.imgView}>
        <Image style={styles.img} source={{ uri: props.image }} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.itemHeader}>{props.title}</Text>
        <Text style={styles.itemPrice}>${props.price.toFixed(2)}</Text>
        <Text>{props.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // View containing entire Product item
  product: {
    padding: 16,
    backgroundColor: "#ffffff",
    margin: 16,
    borderRadius: 10,
    // blugh this only does something on iOS
    shadowOpacity: 0.5,
    shadowRadius: 8,
    // blugh this only does something on Android
    shadowColor: "#000000",
    elevation: 3,
  },
  // View containing Title, Price, Description of Product
  textView: {
    padding: 1,
  },

  // Product title
  itemHeader: {
    color: "#D22030",
    marginTop: 0,
    marginBottom: 0,
    fontSize: 24,
  },

  itemPrice: {
    fontWeight: "bold",
  },

  // View containing the Product Image Element
  imgView: {
    padding: 1,
  },
  // The Image Element itself
  img: {
    alignSelf: "center",
    width: 256,
    height: 256,
    margin: 16,
  },
});

export default ProductItem;
