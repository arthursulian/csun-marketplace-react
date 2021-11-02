import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <View style={styles.textView}>
        <Text>{props.title}</Text>
        <Text>${props.price.toFixed(2)}</Text>
        <Text>{props.description}</Text>
      </View>
      <View style={styles.imgView}>
        <Image style={styles.img} source={{ uri: props.image }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // View containing entire Product item
  product: {
    padding: 1,
  },
  // View containing Title, Price, Description of Product
  textView: {
    padding: 1,
  },
  // View containing the Product Image Element
  imgView: {
    padding: 1,
  },
  // The Image Element itself
  img: {
    padding: 1,
  },
});

export default ProductItem;
