import React, { useState } from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";

function ProductListing(props) {
  return (
    <View>
      <Image
        style={styles.productImage}
        source={{
          uri: props.product.imageUrl,
        }}
      ></Image>
      <Text style={styles.title}>{props.product.title}</Text>
      <Text style={styles.header}>Item Details</Text>
      <Text>
        <Text style={styles.bold}>Seller ID: </Text>
        {props.product.ownerId}
      </Text>
      <Text>
        <Text style={styles.bold}>Price: </Text>$
        {props.product.price.toFixed(2)}
      </Text>
      <View style={styles.buyButton}>
        <Button color="#D22030" title="Buy Item" />
      </View>
      <Text style={styles.header}>Item Description</Text>
      <Text>{props.product.description}</Text>
    </View>
  );
}

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

export default ProductListing;
