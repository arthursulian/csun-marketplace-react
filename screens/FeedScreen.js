// hi
// owo hey
import React, { useState } from "react";
import { StyleSheet, FlatList, StatusBar } from "react-native";

import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { setAvailableProducts } from "../redux/actions/products";
import ProductItem from "../components/shop/ProductItem";

function FeedScreen({ navigation }) {
  const { availableProducts } = useSelector((state) => state.productsReducer);
  return (
    <FlatList
      style={styles.mainFeed}
      data={availableProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <ProductItem product={itemData.item} />}
    />
  );
}

const styles = StyleSheet.create({
  mainFeed: {
    padding: 0,
  },
});

export default FeedScreen;
