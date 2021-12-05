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
import { searchProducts } from "../components/HelperMethods";
function FeedScreen({ navigation }) {
  const { availableProducts } = useSelector((state) => state.productsReducer);

  const [search, setSearch] = useState("");

  const searchByTerm = () => {
    searchProducts(search);
    //console.log(FILTEREDPRODUCTS);
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
  };

  const clearSearch = () => {
    searchProducts("");
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
  };

  return (
    <View>
      {
        //<BarSearch />
      }
      {/*
      <UserContext.Consumer>
        {(value) => <Text>Hello {value.name} </Text>}
      </UserContext.Consumer>
    */}
      <SearchBar
        inputStyle={{ backgroundColor: "white" }}
        containerStyle={{
          backgroundColor: "white",
        }}
        inputContainerStyle={{ backgroundColor: "white" }}
        placeholder={"Search Available Products"}
        value={search}
        onChangeText={(text) => setSearch(text)}
        onEndEditing={searchByTerm}
        showLoading={true}
        onClear={clearSearch}
      />

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
