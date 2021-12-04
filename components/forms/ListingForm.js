import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";
import * as ImagePicker from "expo-image-picker";
import UploadImage from "../UploadImage";

import {
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import PRODUCTS from "../../data/dummy-data";
import Product from "../../models/product";
import { getUniqueProductID } from "../../components/HelperMethods";
import { IMGS } from "../../data/dummy-data";
import { getImgForListing } from "../../components/HelperMethods";

function ListingForm(props) {
  const navigation = useNavigation();
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");
  const [imgURL, setIMGURL] = useState("");

  const createProduct = () => {
    const newProduct = new Product(
      getUniqueProductID(),
      props.user.id,
      productName,
      getImgForListing(), // Need Arthur's help to locate the image url in the uploadImage component
      //& find out how to access it from this screen
      productDescription,
      parseFloat(productPrice)
    );
    PRODUCTS.push(newProduct);
    console.log(PRODUCTS);
    navigation.navigate("Product", { product: newProduct });
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={GlobalStyles.Centeredcontainer}>
        {/* style={GlobalStyles.Centeredcontainer} */}

        <Text style={GlobalStyles.header}>Product Image</Text>

        <View>
          <UploadImage />
          {
            //setIMGURL({ imgURL })
          }
        </View>

        <Text style={GlobalStyles.header}>Product Name</Text>
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Title"
          value={productName}
          onChangeText={(text) => setProductName(text)}
        ></TextInput>
        <Text style={GlobalStyles.header}>Product Description</Text>
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Description"
          value={productDescription}
          onChangeText={(text) => setProductDescription(text)}
        ></TextInput>
        <Text style={GlobalStyles.header}>Product Price</Text>
        <TextInput
          style={GlobalStyles.inputFields}
          placeholder="Price"
          value={productPrice}
          onChangeText={(text) => setProductPrice(text)}
        ></TextInput>
        <Button
          style={GlobalStyles.centeredButton}
          title="Create Listing"
          color="#D22030"
          onPress={createProduct}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   Centeredcontainer: {
//     flex: 1,
//     padding: 10,
//     //alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default ListingForm;
