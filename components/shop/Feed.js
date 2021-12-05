import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, StatusBar } from "react-native";

import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import ProductItem from "./ProductItem";
import GlobalStyles from "../GlobalStyles";

function Feed({ navigation }) {
  const { availableProducts } = useSelector((state) => state.productsReducer);

  const [search, setSearch] = useState("");

  return (
    <View>
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
export default Feed;
