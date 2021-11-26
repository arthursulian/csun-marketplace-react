import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ProductListing from "../components/shop/ProductListing";
import PRODUCTS from "../data/dummy-data";

// this is basically just a shell, for the actual guts behind it go to ../components/shop/ProductListing.js

function ProductScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <ProductListing product={PRODUCTS[3]} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default ProductScreen;
