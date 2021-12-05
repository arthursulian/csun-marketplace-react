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
import { IMGS } from "../data/dummy-data";
function FeedScreen({ navigation }) {
  const { availableProducts } = useSelector((state) => state.productsReducer);

  const [search, setSearch] = useState("");

  const searchByTerm = () => {
    searchProducts(search);
    //console.log(FILTEREDPRODUCTS);
    return (
      <View>
        <FlatList
          ListHeaderComponent={
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
          }
          style={GlobalStyles.feedContainer}
          data={availableProducts}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => <ProductItem product={itemData.item} />}
        />
        {console.log(IMGS)}
      </View>
    );
  };

  const clearSearch = () => {
    searchProducts("");
    return (
      <FlatList
        ListHeaderComponent={
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
        }
        style={GlobalStyles.feedContainer}
        data={availableProducts}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <ProductItem product={itemData.item} />}
      />
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

      <FlatList
        ListHeaderComponent={
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
        }
        style={GlobalStyles.feedContainer}
        data={availableProducts}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <ProductItem product={itemData.item} />}
      />
    </View>
  );
}

/* const styles = StyleSheet.create({
  bleh: {
    position: "absolute",
  },
}); */

export default FeedScreen;
