import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import GlobalStyles from "../components/GlobalStyles";
import * as ImagePicker from "expo-image-picker";
import UploadImage from "../components/UploadImage";

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
} from "react-native";

function NewListingScreen({ navigation }) {
  return (
    <View style={GlobalStyles.Centeredcontainer}>
      {/* style={GlobalStyles.Centeredcontainer} */}

      <Text style={GlobalStyles.header}>Product Image</Text>

      <View>
        <UploadImage />
      </View>

      <Text style={GlobalStyles.header}>Product Name</Text>
      <TextInput
        style={GlobalStyles.inputFields}
        placeholder="Title"
      ></TextInput>
      <Text style={GlobalStyles.header}>Product Description</Text>
      <TextInput
        style={GlobalStyles.inputFields}
        placeholder="Description"
      ></TextInput>
      <Text style={GlobalStyles.header}>Product Price</Text>
      <TextInput
        style={GlobalStyles.inputFields}
        placeholder="Price"
      ></TextInput>
      <Button
        style={GlobalStyles.centeredButton}
        title="Create Listing"
        color="#D22030"
      ></Button>
    </View>
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

export default NewListingScreen;
