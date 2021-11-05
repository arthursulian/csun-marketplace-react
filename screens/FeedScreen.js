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
      renderItem={(itemData) => (
        <ProductItem
          title={itemData.item.title}
          price={itemData.item.price}
          description={itemData.item.description}
          image={itemData.item.imageUrl}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  mainFeed: {
    padding: 15,
  },
});

export default FeedScreen;
