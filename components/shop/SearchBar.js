import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, StatusBar } from "react-native";
import { SearchBar } from "react-native-elements";
import { FILTEREDPRODUCTS } from "../../data/dummy-data";
import { searchProducts } from "../HelperMethods";
import Product from "../../models/product";
import Feed from "./Feed";

function BarSearch() {
  const [search, setSearch] = useState("");

  const searchByTerm = () => {
    searchProducts(search);
    //console.log(FILTEREDPRODUCTS);
  };

  return (
    <View>
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
      />
    </View>
  );
}

export default BarSearch;
