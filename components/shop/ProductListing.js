import React, { useState } from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";
import GlobalStyles from "../GlobalStyles";
import { getUserByID } from "../HelperMethods";
import { useNavigation } from "@react-navigation/native";

function ProductListing(props) {
  const navigation = useNavigation();
  return (
    <View style={GlobalStyles.pageContainer}>
      <Image
        style={GlobalStyles.centeredImage}
        source={{
          uri: props.product.imageUrl,
        }}
      ></Image>
      <Text style={GlobalStyles.title}>{props.product.title}</Text>
      <Text style={GlobalStyles.header}>Item Details</Text>
      <Text>
        <Text style={GlobalStyles.bold}>Seller Name: </Text>
        {getUserByID(props.product.ownerId).name}
      </Text>
      <Text>
        <Text style={GlobalStyles.bold}>Price: </Text>$
        {props.product.price.toFixed(2)}
      </Text>
      <View style={GlobalStyles.centeredButton}>
        <Button
          color="#D22030"
          title="View Seller Profile"
          onPress={() =>
            navigation.navigate("Profile", {
              user: getUserByID(props.product.ownerId),
            })
          }
        />
      </View>
      <Text style={GlobalStyles.header}>Item Description</Text>
      <Text>{props.product.description}</Text>
      <View style={GlobalStyles.centeredButton}>
        <Button color="#D22030" title="Buy Item" />
      </View>
    </View>
  );
}

/*
const styles = StyleSheet.create({
  header: {
    color: "grey",
    marginTop: 16,
    marginBottom: 4,
    fontSize: 24,
  },

  title: {
    alignSelf: "center",
    justifyContent: "center",
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },

  productImage: {
    alignSelf: "center",
    width: 256,
    height: 256,
    margin: 32,
  },

  buyButton: {
    marginTop: 16,
    width: 256,
    alignSelf: "center",
  },

  bold: {
    fontWeight: "bold",
  },
});
*/

export default ProductListing;
