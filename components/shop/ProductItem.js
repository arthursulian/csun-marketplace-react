import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Button,
  useWindowDimensions,
} from "react-native";

import GlobalStyles from "../GlobalStyles";

const ProductItem = (props) => {
  const navigation = useNavigation();
  var itemWidth = useWindowDimensions().width - 32;
  const product = StyleSheet.compose(styles.product, { width: itemWidth });
  return (
    <Pressable style={product}>
      <View style={styles.imgView}>
        <Image
          style={GlobalStyles.centeredImage}
          source={{ uri: props.product.imageUrl }}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.itemHeader}>{props.product.title}</Text>
        <Text style={styles.itemPrice}>${props.product.price.toFixed(2)}</Text>
        <Text>{props.product.description}</Text>
      </View>
      <Button
        title="View"
        color="#D22030"
        onPress={() =>
          navigation.navigate("Product", { product: props.product })
        }
      />
    </Pressable>
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
    marginBottom: 8,
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
