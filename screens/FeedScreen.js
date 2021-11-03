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

import { useSelector } from "react-redux";
import ProductItem from "../components/shop/ProductItem";
import { selectProducts } from "../store/reducers/products";

/*
const ItemDetail = (props) => {
  return (
    <View>
      <Text>
        {props.category}: <Text style={styles.bold}>{props.value}</Text>
      </Text>
    </View>
  );
};

var productList = [
  [
    "Red Shirt",
    "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg",
    "A red t-shirt, perfect for days with non-red weather.",
    29.99,
  ],

  [
    "Blue Carpet",
    "https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "Fits your red shirt perfectly. To stand on. Not to wear it.",
    99.99,
  ],

  [
    "Coffee Mug",
    "https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg",
    "Can also be used for tea!",
    8.99,
  ],

  [
    "PowerBook",
    "https://get.pxhere.com/photo/laptop-computer-macbook-mac-screen-water-board-keyboard-technology-air-mouse-photo-airport-aircraft-tablet-aviation-office-black-monitor-keys-graphic-hardware-image-pc-exhibition-multimedia-calculator-vector-water-cooling-floppy-disk-phased-out-desktop-computer-netbook-personal-computer-computer-monitor-electronic-device-computer-hardware-display-device-448748.jpg",
    "Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!",
    2299.99,
  ],

  [
    "Pen & Paper",
    "https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg",
    "Can be used for role-playing (not the kind of role-playing you're thinking about...)",
    5.49,
  ],
];
/*
 {/* Im trying to make a for loop that runns throught every element in the array but I couldnt figure it out :(  */
/* for (varr i = 0; i < productList.length; i++) {
      <ItemDetail category="Name" value={productList[i][0]} />
      <ItemDetail category="Price" value={productList[i][3]} />
      <ItemDetail category="Description" value={productList[i][2]} />
      <Image
        style={styles.itemImage}
        source={{
          uri: productList[i][1],
        }}
      />
} */

// function rsf
function FeedScreen({ navigation }) {
  const products = useSelector(selectProducts);
  // console.log(products);
  return (
    <FlatList
      style={styles.mainFeed}
      data={products}
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
/*
return (
    <ScrollView style={styles.mainFeed}>
      <ItemDetail category="Name" value={productList[0][0]} />
      <ItemDetail category="Price" value={"$" + productList[0][3]} />
      <ItemDetail category="Description" value={productList[0][2]} />
      <Image
        style={styles.itemImage}
        source={{
          uri: productList[0][1],
        }}
      />
      <ItemDetail category="Name" value={productList[1][0]} />
      <ItemDetail category="Price" value={"$" + productList[1][3]} />
      <ItemDetail category="Description" value={productList[1][2]} />
      <Image
        style={styles.itemImage}
        source={{
          uri: productList[1][1],
        }}
      />
      <ItemDetail category="Name" value={productList[2][0]} />
      <ItemDetail category="Price" value={"$" + productList[2][3]} />
      <ItemDetail category="Description" value={productList[2][2]} />
      <Image
        style={styles.itemImage}
        source={{
          uri: productList[2][1],
        }}
      />
      <ItemDetail category="Name" value={productList[3][0]} />
      <ItemDetail category="Price" value={"$" + productList[3][3]} />
      <ItemDetail category="Description" value={productList[3][2]} />
      <Image
        style={styles.itemImage}
        source={{
          uri: productList[3][1],
        }}
      />
      <ItemDetail category="Name" value={productList[4][0]} />
      <ItemDetail category="Price" value={"$" + productList[4][3]} />
      <ItemDetail category="Description" value={productList[4][2]} />
      <Image
        style={styles.itemImage}
        source={{
          uri: productList[4][1],
        }}
      />
    </ScrollView>
  );
*/
//styes = rnss
const styles = StyleSheet.create({
  mainFeed: {
    padding: 15,
  },
});

export default FeedScreen;
