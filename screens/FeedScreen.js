// hi
// owo hey
import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, StatusBar } from "react-native";

import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { setAvailableProducts } from "../redux/actions/products";
import ProductItem from "../components/shop/ProductItem";
import GlobalStyles from "../components/GlobalStyles";

import UserContext from "../components/UserContext";

function FeedScreen({ navigation }) {
  const { availableProducts } = useSelector((state) => state.productsReducer);
  return (
    <View>
      <UserContext.Consumer>
        {(value) => <Text>Hello {value.name} </Text>}
      </UserContext.Consumer>
      <FlatList
        style={GlobalStyles.feedContainer}
        data={availableProducts}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <ProductItem product={itemData.item} />}
      />
    </View>
  );
}
/*
const styles = StyleSheet.create({
  mainFeed: {
    padding: 0,
  },
});
*/
export default FeedScreen;
