// hi
// owo hey
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  FlatList,
  StatusBar,
} from "react-native";

import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { setAvailableProducts } from "../redux/actions/products";
import ProductItem from "../components/shop/ProductItem";

const ItemDetail = (props) => {
  return (
    <View>
      <Text>
        {props.category}: <Text style={styles.bold}>{props.value}</Text>
      </Text>
    </View>
  );
};

function FeedScreen({ navigation }) {
  const products = useSelector((state) => state.products.availableProducts);
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
