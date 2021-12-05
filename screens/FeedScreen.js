import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, StatusBar } from "react-native";

import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { setAvailableProducts } from "../redux/actions/products";
import ProductItem from "../components/shop/ProductItem";
import GlobalStyles from "../components/GlobalStyles";
import BarSearch from "../components/shop/SearchBar";
import { SearchBar } from "react-native-elements";

import UserContext from "../components/UserContext";
import { ScrollView } from "react-native-gesture-handler";

function FeedScreen({ navigation }) {
  const { availableProducts } = useSelector((state) => state.productsReducer);

  const [search, setSearch] = useState("");

  return (
    <View>
      <BarSearch />
      {/*
      <UserContext.Consumer>
        {(value) => <Text>Hello {value.name} </Text>}
      </UserContext.Consumer>
    */}
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
