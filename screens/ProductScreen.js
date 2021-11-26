import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ProductListing from "../components/shop/ProductListing";
import GlobalStyles from "../components/GlobalStyles";

// this is basically just a shell, for the actual guts behind it go to ../components/shop/ProductListing.js

function ProductScreen({ navigation, route }) {
  return (
    <ScrollView>
      <ProductListing product={route.params.product} />
    </ScrollView>
  );
}

export default ProductScreen;
